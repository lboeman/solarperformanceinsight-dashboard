import { Inverter } from "./Inverter";

export class System {
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  inverters: Array<Inverters>;

  constructor(
    name="New System",
    latitude=0,
    longitude=0,
    elevation=0,
    inverters=[],
  ){
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
      this.elevation = elevation;
      if (inverters.length == 0 ){
        this.inverters = [new Inverter()];
      } else {
        this.intervers = inverters;
      }
  }
}
