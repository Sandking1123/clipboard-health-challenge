"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateReportPDFUseCase = void 0;
class GenerateReportPDFUseCase {
    constructor(shiftRepository, pdfProvider) {
        this.shiftRepository = shiftRepository;
        this.pdfProvider = pdfProvider;
        this.shiftRepository = shiftRepository;
        this.pdfProvider = pdfProvider;
    }
    async execute(facility) {
        const shifts = await this.shiftRepository.getShiftsByFacility(facility.id);
        const report = await this.pdfProvider.generateReport(shifts);
        return report;
    }
}
exports.GenerateReportPDFUseCase = GenerateReportPDFUseCase;
//# sourceMappingURL=GenerateShiftReportPDFUseCase.js.map