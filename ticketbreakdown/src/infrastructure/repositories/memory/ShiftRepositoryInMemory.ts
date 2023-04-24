import {IShiftRepository} from "./IShiftRepository";
import {Shift} from "../../../domain/entities/Shift";
import {Facility} from "../../../domain/entities/Facility";
import {Agent} from "../../../domain/entities/Agent";
import crypto from "crypto";

export class ShiftRepositoryInMemory implements IShiftRepository {
    private shifts: Shift[] = [];

    public async create(facility: Facility, agent: Agent, hours_worked: number): Promise<Shift> {
        agent.id = crypto.randomUUID();

        const shift = new Shift(crypto.randomUUID(), facility, agent, hours_worked);

        this.shifts.push(shift);

        return shift;
    }

    public async findById(id: string): Promise<Shift | undefined> {
        const shift = this.shifts.find((shift) => shift.id === id);
        return shift;
    }

    public async list(): Promise<Shift[]> {
        return this.shifts;
    }

    public getShiftsByFacility(facilityId: string): Promise<Shift[]> {
        const shifts: Shift[] = this.shifts.filter((shift) => shift.facility.id === facilityId);
        return Promise.resolve(shifts);
    }
}