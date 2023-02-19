
export namespace ApiTypes {
  
  export interface Pokedex {
    id:             string;
    name:           string;
    bearing_1:      BearingType1;
    bearing_2:      BearingType1;
    bearing_3:      BearingType2;
    bearing_4:      BearingType2;
    bearing_5:      BearingType2;
    bearing_6:      BearingType2;
    bearing_7:      BearingType1;
    bearing_8:      BearingType1;
    bearing_9:      BearingType2;
    cooler:         Cooler;
    gas_collector:  GasCollector;
    valve_position: ValvePosition;
    main_drive:     MainDrive;
    oil_system:     OilSystem;
    work:           number;
  }
  
  export interface BearingType1 {
    heating_temperature: HeatingTemperature;
    vibration:           Vibration;
  }
  
  export interface HeatingTemperature {
    temperature: number;
    set_point:   SetPoint;
  }
  
  export interface SetPoint {
    alarm_max:   number;
    alarm_min:   number;
    warning_max: number;
    warning_min: number;
  }
  
  export interface Vibration {
    vibration_axial:      number;
    set_point_axial:      SetPoint;
    vibration_horizontal: number;
    set_point_horizontal: SetPoint;
    vibration_vertical:   number;
    set_point_vertical:   SetPoint;
  }
  
  export interface BearingType2 {
    heating_temperature: HeatingTemperature;
  }
  
  export interface Cooler {
    oil:   Oil;
    water: Oil;
  }
  
  export interface Oil {
    temperature_after:  number;
    temperature_before: number;
  }
  
  export interface GasCollector {
    temperature_before:   number;
    underpressure_before: number;
  }
  
  export interface MainDrive {
    rotor_current:  number;
    rotor_voltage:  number;
    stator_current: number;
    stator_voltage: number;
  }
  
  export interface OilSystem {
    oil_level:    number;
    oil_pressure: number;
  }
  
  export interface ValvePosition {
    gas_valve_closed:   number;
    gas_valve_open:     number;
    gas_valve_position: number;
  }
  
}