import {IShiftRepository} from "../../../../infrastructure/repositories/memory/IShiftRepository";
import {Shift} from "../../../entities/Shift";
import {CreateShiftDTO } from "./CreateShiftDTO";

export class CreateShiftUseCase {
    constructor(private shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    public async create(createUserDTO: CreateShiftDTO): Promise<Shift> {
        const shift = await this.shiftRepository.create(createUserDTO.facility, createUserDTO.agent, createUserDTO.hours_worked);
        return shift;
    }
}
