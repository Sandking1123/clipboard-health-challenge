"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketController = void 0;
class TicketController {
    constructor(generateReportPDFUseCase, createShiftUseCase, listShiftsUseCase) {
        this.generateReportPDFUseCase = generateReportPDFUseCase;
        this.createShiftUseCase = createShiftUseCase;
        this.listShiftsUseCase = listShiftsUseCase;
        this.generateReportPDFUseCase = generateReportPDFUseCase;
        this.createShiftUseCase = createShiftUseCase;
        this.listShiftsUseCase = listShiftsUseCase;
    }
    async createShift(request, response) {
        const { facility, agent, hours_worked } = request.body;
        if (facility === undefined)
            return response.status(400).json("Missing facility");
        if (agent === undefined)
            return response.status(400).json("Missing agent");
        if (hours_worked === undefined)
            return response.status(400).json("Missing hours_worked");
        try {
            const shift = await this.createShiftUseCase.create({ facility, agent, hours_worked });
            return response.status(201).send(shift);
        }
        catch (err) {
            return response.status(500).json({
                message: err || 'Unexpected error.'
            });
        }
    }
    async listShifts(request, response) {
        const facilityId = request.params.facilityId;
        if (facilityId === undefined)
            return response.status(400).json("Missing ID facility");
        try {
            const shifts = await this.listShiftsUseCase.getShiftsByFacility(facilityId);
            return response.status(200).send(shifts);
        }
        catch (err) {
            return response.status(500).json({
                message: err || 'Unexpected error.'
            });
        }
    }
    async generatePDF(request, response) {
        const { facility } = request.body;
        if (facility === undefined)
            return response.status(400).json("Missing facility");
        try {
            await this.generateReportPDFUseCase.execute(facility).then((report) => {
                return response.status(200).send(report);
            });
        }
        catch (err) {
            return response.status(500).json({
                message: err || 'Unexpected error.'
            });
        }
    }
}
exports.TicketController = TicketController;
//# sourceMappingURL=TicketController.js.map