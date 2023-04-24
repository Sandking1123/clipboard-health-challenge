import {IShiftRepository} from "../../../../infrastructure/repositories/memory/IShiftRepository";

import {Shift} from "../../../entities/Shift";
import {ResponseShiftDTO} from "./ResponseShiftDTO";


export class ListShiftsUseCase {
    constructor(private shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    public async getShiftsByFacility(facilityId: string): Promise<Shift[]> {
        const shifts = await this.shiftRepository.getShiftsByFacility(facilityId);
        return shifts;


    }
}
