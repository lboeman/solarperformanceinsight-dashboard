import {
  FixedTrackingParameters,
  SingleAxisTrackingParameters
} from "./Tracking";
import { ModuleParameters } from "./Module";

export class PVArray {
  name: string;
  makeModel: string;
  module_arameters: ModuleParamters;
  temperature_model_parameters: Array<number>;
  albedo: number;
  tracking: FixedTrackingParameters | SingleAxisTrackingParameters;
  // PVSyst parameters
  module_per_string: number;
  strings: number;
  losses_parameters: any;
}
