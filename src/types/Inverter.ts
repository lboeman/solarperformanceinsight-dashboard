import { PVArray } from "./PVArray";

class InverterParameters {}
export class Inverter {
  name: string;
  makeModel: string;
  inverterParameters: InverterParameters;
  lossesParameters: any;
  arrays: Array<PVArray>;

  constructor(
    name="New Inverter",
    makeModel="",
    inverterParameters={},
    lossesParameters={},
    arrays=[],
  ){
    this.name = name;
    this.makeModel = makeModel;
    this.inverterParameters = inverterParameters;
    this.lossesParameters = lossesParameters;
    if (arrays.length == 0){
      this.arrays = [ new PVArray() ];
    } else{
      this.arrays = arrays;
    }
  }
}

