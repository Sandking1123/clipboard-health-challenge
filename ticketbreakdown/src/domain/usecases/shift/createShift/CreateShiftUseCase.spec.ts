import {app} from "../../../../app";
import request from "supertest";

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
        }


        await request(app)
            .post('/api/shift')
            .send(payload)
            .expect(201);
    });

    test("GET /api/shift", async () => {

        await request(app)
            .get('/api/shift/fd8f37a5-7ed5-4601-8763-c6cb2eaa6975')
            .expect(200)
    });

    test("POST api/shift/generatePDF", async () => {

        const payloadReport = {
            facility: {
                id: "fd8f37a5-7ed5-4601-8763-c6cb2eaa6975"
            }
        }


        await request(app)
            .post('/api/shift/generatePDF')
            .send(payloadReport)
            .expect(200);
    });


});