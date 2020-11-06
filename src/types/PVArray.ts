import {
  FixedTrackingParameters,
  SingleAxisTrackingParameters
} from "./Tracking";
import { PvsystTemperatureParameters } from "./TemperatureParameters";
import {
  PVSystModuleParameters,
  PVWattsModuleParameters
} from "./ModuleParameters";

export class PVArray {
  name: string;
  makeModel: string;
  moduleParameters: PVSystModuleParameters | PVWattsModuleParameters;
  temperatureModelParameters: Array<number> | PvsystTemperatureParameters;
  tracking: FixedTrackingParameters | SingleAxisTrackingParameters;
  // PVSyst parameters
  modulesPerString: number;
  strings: number;
  lossesParameters: any;

  constructor({
    name = "New Array",
    makeModel = "ABC 123",
    moduleParameters = new PVSystModuleParameters(),
    temperatureModelParameters = [],
    tracking = new FixedTrackingParameters(),
    modulesPerString = 0,
    strings = 0,
    lossesParameters = {}
  } = {}) {
    this.name = name;
    this.makeModel = makeModel;
    this.moduleParameters = moduleParameters;
    this.temperatureModelParameters = temperatureModelParameters;
    this.tracking = tracking;
    this.modulesPerString = modulesPerString;
    this.strings = strings;
    this.lossesParameters = lossesParameters;
  }
}
