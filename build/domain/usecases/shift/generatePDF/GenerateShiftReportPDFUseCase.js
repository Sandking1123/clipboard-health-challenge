"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateShiftReportPDFUseCase = void 0;
class GenerateShiftReportPDFUseCase {
    constructor(shiftRepository, pdfProvider) {
        this.shiftRepository = shiftRepository;
        this.pdfProvider = pdfProvider;
        this.shiftRepository = shiftRepository;
        this.pdfProvider = pdfProvider;
    }
    async create(facility, agent, hours_worked) {
        const shift = await this.shiftRepository.create(facility, agent, hours_worked);
        return shift;
    }
    async execute(facility) {
        const shifts = await this.shiftRepository.getShiftsByFacility(facility.id);
        return await this.pdfProvider.generateReport(shifts);
    }
}
exports.GenerateShiftReportPDFUseCase = GenerateShiftReportPDFUseCase;
//# sourceMappingURL=GenerateShiftReportPDFUseCase.js.map