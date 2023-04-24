"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShiftUseCase = void 0;
class CreateShiftUseCase {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
        this.shiftRepository = shiftRepository;
    }
    async create(createUserDTO) {
        const shift = await this.shiftRepository.create(createUserDTO.facility, createUserDTO.agent, createUserDTO.hours_worked);
        return shift;
    }
}
exports.CreateShiftUseCase = CreateShiftUseCase;
//# sourceMappingURL=CreateShiftUseCase.js.map