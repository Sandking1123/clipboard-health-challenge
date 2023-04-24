"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityRepositoryInMemory = void 0;
const Facility_1 = require("../../../domain/entities/Facility");
class FacilityRepositoryInMemory {
    constructor() {
        this.facilitie = [];
    }
    async create(name) {
        const facility = new Facility_1.Facility(0, "test");
        Object.assign(facility, {
            name,
        });
        this.facilitie.push(facility);
        return facility;
    }
    async findById(id) {
        const facility = this.facilitie.find((facility) => facility.id === id);
        return facility;
    }
    async list() {
        return this.facilitie;
    }
}
exports.FacilityRepositoryInMemory = FacilityRepositoryInMemory;
//# sourceMappingURL=FacilityRepositoryInMemory.js.map