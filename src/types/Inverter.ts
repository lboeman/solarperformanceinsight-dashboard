import { PVArray } from "./PVArray";

class InverterParameters {}
export class Inverter {
  name: string;
  makeModel: string;
  inverterParameters: InverterParameters;
  lossesParameters: any;
  arrays: Array<PVArray>;

  constructor({
    name="New Inverter",
    makeModel="ABC 520",
    inverterParameters={},
    lossesParameters={},
    arrays=[],
  }={}
  ){
    this.name = name;
    this.makeModel = makeModel;
    this.inverterParameters = inverterParameters;
    this.lossesParameters = lossesParameters;

    if (arrays.length == 0){
      this.arrays = [ new PVArray() ];
    } else{
      this.arrays = arrays.map(a => new PVArray(a));
    }
  }
}

