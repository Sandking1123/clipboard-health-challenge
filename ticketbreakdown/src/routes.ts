import {Router} from "express";
import {ticketController} from "./domain/usecases/shift/GenerateShiftReportPDFFactory";

const routes = Router()

routes.post('/shift', (request, response) => {
    ticketController.createShift(request, response);
});

routes.post('/shift/generatePDF', (request, response) => {
    ticketController.generatePDF(request, response);
});

routes.get('/shift/:facilityId', (request, response) => {
    ticketController.listShifts(request, response);
});

export {routes}