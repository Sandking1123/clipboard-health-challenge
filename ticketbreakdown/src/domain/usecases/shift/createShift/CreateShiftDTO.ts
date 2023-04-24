import {Facility} from "../../../entities/Facility";
import {Agent} from "../../../entities/Agent";

export class CreateShiftDTO {
    facility?: Facility;
    agent?: Agent;
    hours_worked?: number;
}