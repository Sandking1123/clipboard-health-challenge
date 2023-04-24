"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReportPDFUseCase = exports.ticketController = void 0;
const PDFKit_1 = require("../../../infrastructure/providers/PDFKit");
const GenerateReportPDFUseCase_1 = require("./GenerateReportPDFUseCase");
const ShiftRepositoryInMemory_1 = require("../../../infrastructure/repositories/memory/ShiftRepositoryInMemory");
const TicketController_1 = require("../../../application/controllers/TicketController");
const shiftRepository = new ShiftRepositoryInMemory_1.ShiftRepositoryInMemory();
const pdfGenerate = new PDFKit_1.PDFKit();
const generateReportPDFUseCase = new GenerateReportPDFUseCase_1.GenerateReportPDFUseCase(shiftRepository, pdfGenerate);
exports.generateReportPDFUseCase = generateReportPDFUseCase;
const ticketController = new TicketController_1.TicketController(generateReportPDFUseCase);
exports.ticketController = ticketController;
//# sourceMappingURL=GenerateReportPDFFactory.js.map