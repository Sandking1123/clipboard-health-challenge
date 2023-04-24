"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFKit = void 0;
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs = __importStar(require("fs"));
const pdf2base64 = require('pdf-to-base64');
class PDFKit {
    async generateReport(shifts) {
        const pdfDoc = new pdfkit_1.default();
        pdfDoc.text('Shift Report');
        pdfDoc.dash(5, { space: 5 });
        shifts.forEach(shift => {
            pdfDoc.text(`Facility ID: ${shift.facility.id}`);
            pdfDoc.text(`Facility Name: ${shift.facility.name}`);
            pdfDoc.text(`Agent Custom ID: ${shift.agent.id}`);
            pdfDoc.text(`Agent Name ID: ${shift.agent.name}`);
            pdfDoc.text(`Hours Worked: ${shift.hours_worked}`);
            pdfDoc.dash(5, { space: 5 });
        });
        pdfDoc.pipe(fs.createWriteStream('shift.pdf'));
        pdfDoc.end();
        const base64String = await pdf2base64('shift.pdf');
        console.log(base64String);
        return base64String;
    }
}
exports.PDFKit = PDFKit;
//# sourceMappingURL=PDFKit.js.map