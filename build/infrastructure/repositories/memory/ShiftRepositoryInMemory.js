"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftRepositoryInMemory = void 0;
const Shift_1 = require("../../../domain/entities/Shift");
const crypto_1 = __importDefault(require("crypto"));
class ShiftRepositoryInMemory {
    constructor() {
        this.shifts = [];
    }
    async create(facility, agent, hours_worked) {
        agent.id = crypto_1.default.randomUUID();
        const shift = new Shift_1.Shift(crypto_1.default.randomUUID(), facility, agent, hours_worked);
        this.shifts.push(shift);
        return shift;
    }
    async findById(id) {
        const shift = this.shifts.find((shift) => shift.id === id);
        return shift;
    }
    async list() {
        return this.shifts;
    }
    getShiftsByFacility(facilityId) {
        const shifts = this.shifts.filter((shift) => shift.facility.id === facilityId);
        return Promise.resolve(shifts);
    }
}
exports.ShiftRepositoryInMemory = ShiftRepositoryInMemory;
//# sourceMappingURL=ShiftRepositoryInMemory.js.map