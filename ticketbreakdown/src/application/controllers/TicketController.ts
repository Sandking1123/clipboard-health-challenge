import {GenerateShiftReportPDFUseCase} from "../../domain/usecases/shift/generatePDF/GenerateShiftReportPDFUseCase";
import {Request, Response} from "express";
import {CreateShiftUseCase} from "../../domain/usecases/shift/createShift/CreateShiftUseCase";
import {ListShiftsUseCase} from "../../domain/usecases/shift/listShifts/ListShiftsUseCase";

class TicketController {
    constructor(private generateReportPDFUseCase: GenerateShiftReportPDFUseCase, private createShiftUseCase: CreateShiftUseCase, private listShiftsUseCase: ListShiftsUseCase) {
        this.generateReportPDFUseCase = generateReportPDFUseCase;
        this.createShiftUseCase = createShiftUseCase;
        this.listShiftsUseCase = listShiftsUseCase;
    }

    public async createShift(request: Request, response: Response): Promise<Response> {
        const {facility, agent, hours_worked} = request.body;


        if (facility === undefined) return response.status(400).json("Missing facility");
        if (agent === undefined) return response.status(400).json("Missing agent");
        if (hours_worked === undefined) return response.status(400).json("Missing hours_worked");

        try {
            const shift = await this.createShiftUseCase.create({facility, agent, hours_worked});
            return response.status(201).send(shift);
        } catch (err) {
            return response.status(500).json({
                message: err || 'Unexpected error.'
            })
        }
    }

    public async listShifts(request: Request, response: Response): Promise<Response> {
        const facilityId = request.params.facilityId;

        if (facilityId === undefined) return response.status(400).json("Missing ID facility");

        try     {

            const shifts = await this.listShiftsUseCase.getShiftsByFacility(facilityId);
            return response.status(200).send(shifts);


        } catch (err) {
            return response.status(500).json({
                message: err || 'Unexpected error.'
            })
        }
    }

    async generatePDF(request: Request, response: Response) {
        const {facility} = request.body;


        if (facility === undefined) return response.status(400).json("Missing facility");

        try {
            await this.generateReportPDFUseCase.execute(facility).then((report) => {
                return response.status(200).send(report);
            });

        } catch (err) {
            return response.status(500).json({
                message: err || 'Unexpected error.'
            })
        }
    }
}

export {TicketController}