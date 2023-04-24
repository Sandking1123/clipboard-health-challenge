import {Facility} from "./Facility";
import {Agent} from "./Agent";

export class Shift {
    id: string;
    facility: Facility;
    agent: Agent;
    hours_worked: number;

    constructor(id: string, facility: Facility, agent: Agent, hours_worked: number) {
        this.id = id;
        this.facility = facility;
        this.agent = agent;
        this.hours_worked = hours_worked;
    }
}