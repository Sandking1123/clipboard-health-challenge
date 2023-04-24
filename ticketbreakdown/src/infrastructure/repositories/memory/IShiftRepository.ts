import {Shift} from "../../../domain/entities/Shift";
import {Facility} from "../../../domain/entities/Facility";
import {Agent} from "../../../domain/entities/Agent";

export interface IShiftRepository {

    getShiftsByFacility(facilityId: string): Promise<Shift[]>;

    create(facility?: Facility, agent?: Agent, hours_worked?: number): Promise<Shift>;

    list(): Promise<Shift[]>;
}