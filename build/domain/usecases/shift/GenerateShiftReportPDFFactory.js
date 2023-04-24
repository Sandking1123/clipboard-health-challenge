"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReportPDFUseCase = exports.ticketController = void 0;
const PDFKit_1 = require("../../../infrastructure/providers/PDFKit");
const GenerateShiftReportPDFUseCase_1 = require("./generatePDF/GenerateShiftReportPDFUseCase");
const ShiftRepositoryInMemory_1 = require("../../../infrastructure/repositories/memory/ShiftRepositoryInMemory");
const TicketController_1 = require("../../../application/controllers/TicketController");
const CreateShiftUseCase_1 = require("./createShift/CreateShiftUseCase");
const ListShiftsUseCase_1 = require("./listShifts/ListShiftsUseCase");
const shiftRepository = new ShiftRepositoryInMemory_1.ShiftRepositoryInMemory();
const pdfGenerate = new PDFKit_1.PDFKit();
const generateReportPDFUseCase = new GenerateShiftReportPDFUseCase_1.GenerateShiftReportPDFUseCase(shiftRepository, pdfGenerate);
exports.generateReportPDFUseCase = generateReportPDFUseCase;
const createShiftUseCase = new CreateShiftUseCase_1.CreateShiftUseCase(shiftRepository);
const listShiftsUseCase = new ListShiftsUseCase_1.ListShiftsUseCase(shiftRepository);
const ticketController = new TicketController_1.TicketController(generateReportPDFUseCase, createShiftUseCase, listShiftsUseCase);
exports.ticketController = ticketController;
//# sourceMappingURL=GenerateShiftReportPDFFactory.js.map