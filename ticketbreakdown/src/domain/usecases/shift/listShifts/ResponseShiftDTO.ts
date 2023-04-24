import { Shift } from "domain/entities/Shift";

export class ResponseShiftDTO {
   shifts?: Shift[];
   constructor(shifts: Shift[]) {}
}
