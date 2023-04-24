"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../../../app");
const supertest_1 = __importDefault(require("supertest"));
describe('test', () => {
    test("POST /api/shift", async () => {
        const payload = {
            facility: {
                id: "fd8f37a5-7ed5-4601-8763-c6cb2eaa6975", name: "facility_1"
            },
            agent: {
                name: "agent_1"
            },
            hours_worked: 9
        };
        await (0, supertest_1.default)(app_1.app)
            .post('/api/shift')
            .send(payload)
            .expect(201);
    });
    test("GET /api/shift", async () => {
        await (0, supertest_1.default)(app_1.app)
            .get('/api/shift/some-id')
            .expect(200);
    });
    test("POST api/shift/generatePDF", async () => {
        const payloadReport = {
            facility: {
                id: "fd8f37a5-7ed5-4601-8763-c6cb2eaa6975"
            }
        };
        await (0, supertest_1.default)(app_1.app)
            .post('/api/shift/generatePDF')
            .send(payloadReport)
            .expect(200);
    });
});
//# sourceMappingURL=CreateShiftUseCase.spec.js.map