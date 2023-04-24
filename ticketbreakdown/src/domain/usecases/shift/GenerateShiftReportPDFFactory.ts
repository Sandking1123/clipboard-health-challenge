import {PDFKit} from '../../../infrastructure/providers/PDFKit';
import {GenerateShiftReportPDFUseCase} from './generatePDF/GenerateShiftReportPDFUseCase';
import {ShiftRepositoryInMemory} from '../../../infrastructure/repositories/memory/ShiftRepositoryInMemory';
import {TicketController} from '../../../application/controllers/TicketController';
import {CreateShiftUseCase} from "./createShift/CreateShiftUseCase";
import {ListShiftsUseCase} from "./listShifts/ListShiftsUseCase";


const shiftRepository = new ShiftRepositoryInMemory();
const pdfGenerate = new PDFKit();
const generateReportPDFUseCase = new GenerateShiftReportPDFUseCase(shiftRepository, pdfGenerate);
const createShiftUseCase = new CreateShiftUseCase(shiftRepository);
const listShiftsUseCase = new ListShiftsUseCase(shiftRepository);
const ticketController = new TicketController(generateReportPDFUseCase, createShiftUseCase, listShiftsUseCase);


export {ticketController, generateReportPDFUseCase};