import {IPDFProvider} from "./IPDFProvider";
import {Shift} from "../../domain/entities/Shift";
import PDFDocument from 'pdfkit';
import * as fs from "fs";
const pdf2base64 = require('pdf-to-base64');

export class PDFKit implements IPDFProvider {

   async generateReport(shifts: Shift[]): Promise<string> {

            const pdfDoc = new PDFDocument();
            pdfDoc.text('Shift Report');
            pdfDoc.dash(5, {space: 5});
            shifts.forEach(shift => {
                pdfDoc.text(`Facility ID: ${shift.facility.id}`);
                pdfDoc.text(`Facility Name: ${shift.facility.name}`);
                pdfDoc.text(`Agent Custom ID: ${shift.agent.id}`);
                pdfDoc.text(`Agent Name ID: ${shift.agent.name}`);
                pdfDoc.text(`Hours Worked: ${shift.hours_worked}`);
                pdfDoc.dash(5, {space: 5});
            });

       pdfDoc.pipe(fs.createWriteStream('shift.pdf'));
       pdfDoc.end();

       const base64String = await pdf2base64('shift.pdf');
       console.log(base64String);
       return base64String;
    }
}
