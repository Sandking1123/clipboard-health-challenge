"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const GenerateShiftReportPDFFactory_1 = require("./domain/usecases/shift/GenerateShiftReportPDFFactory");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.post('/shift', (request, response) => {
    GenerateShiftReportPDFFactory_1.ticketController.createShift(request, response);
});
routes.post('/shift/generatePDF', (request, response) => {
    GenerateShiftReportPDFFactory_1.ticketController.generatePDF(request, response);
});
routes.get('/shift/:facilityId', (request, response) => {
    GenerateShiftReportPDFFactory_1.ticketController.listShifts(request, response);
});
//# sourceMappingURL=routes.js.map