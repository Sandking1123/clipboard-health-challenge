import {Shift} from "../../domain/entities/Shift";


export interface IPDFProvider {
    generateReport(shifts: Shift[]): Promise<string>;
  }