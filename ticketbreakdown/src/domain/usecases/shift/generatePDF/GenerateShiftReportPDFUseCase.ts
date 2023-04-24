import {IShiftRepository} from "../../../../infrastructure/repositories/memory/IShiftRepository";
import {IPDFProvider} from "../../../../infrastructure/providers/IPDFProvider";
import {Shift} from "../../../entities/Shift";
import {Facility} from "../../../entities/Facility";
import {Agent} from "../../../entities/Agent";


export class GenerateShiftReportPDFUseCase {
    constructor(private shiftRepository: IShiftRepository, private pdfProvider: IPDFProvider) {
        this.shiftRepository = shiftRepository;
        this.pdfProvider = pdfProvider;
    }

    public async create(facility: Facility, agent: Agent, hours_worked: number): Promise<Shift> {
        const shift = await this.shiftRepository.create(facility, agent, hours_worked);
        return shift;
    }

    public async execute(facility: Facility): Promise<string> {

        const shifts: Shift[] = await this.shiftRepository.getShiftsByFacility(facility.id);
        return await this.pdfProvider.generateReport(shifts);
    }




}