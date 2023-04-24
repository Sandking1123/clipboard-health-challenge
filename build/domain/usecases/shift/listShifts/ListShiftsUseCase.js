"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShiftsUseCase = void 0;
class ListShiftsUseCase {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
        this.shiftRepository = shiftRepository;
    }
    async getShiftsByFacility(facilityId) {
        const shifts = await this.shiftRepository.getShiftsByFacility(facilityId);
        return shifts;
    }
}
exports.ListShiftsUseCase = ListShiftsUseCase;
//# sourceMappingURL=ListShiftsUseCase.js.map