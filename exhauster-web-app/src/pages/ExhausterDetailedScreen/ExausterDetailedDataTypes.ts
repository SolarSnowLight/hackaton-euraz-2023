import {MarkView} from "../MainScreen/ExhausterCard/DropDownList/MarkView";
import {Utils} from "src/utils/utils";
import empty = Utils.empty;
import {DateTime} from "../../utils/DateTime";


export namespace ExausterDetailedDataTypes {
  
  export type StateType = 'ok'|'caution'|'danger'
  export type LocationType =
    'bearer-1'|'bearer-2'|'bearer-3'|'bearer-4'|
    'bearer-5'|'bearer-6'|'bearer-7'|'bearer-8'|
    'bearer-9'
  export type MarkType = {
    id: 'temperature'|'vertical-vibration'|'horizontal-vibration'|'axial-vibration'|
      'level'|'pressure'|
      'oil-temperature-before'|'oil-temperature-after'|'water-temperature-before'|'water-temperature-after'|
      'rotor-current'|'rotor-voltage'|'stator-current'|'stator-voltage'|
      'underpressure'|'dust-level'|'position'
    value: number
    state: StateType
    minCaution?: number|undefined
    maxCaution?: number|undefined
    minDanger?: number|undefined
    maxDanger?: number|undefined
  }
  
  
  export type BearerDataType = {
    temperature: MarkType
    verticalVibration?: MarkType|undefined
    horizontalVibration?: MarkType|undefined
    axialVibration?: MarkType|undefined
  }
  export type CoolerDataType = {
    oilTemperatureBefore: MarkType
    oilTemperatureAfter: MarkType
    waterTemperatureBefore: MarkType
    waterTemperatureAfter: MarkType
  }
  export type MainEngineDataType = {
    rotorCurrent: MarkType
    rotorVoltage: MarkType
    statorCurrent: MarkType
    statorVoltage: MarkType
  }
  export type OilDataType = {
    level: MarkType
    pressure: MarkType
  }
  export type GasCollectorDataType = {
    temperature: MarkType
    underpressure: MarkType
    dustLevel: MarkType
  }
  export type ValveDataType = {
    position: MarkType // 0 - закрты, 100 - открыт
  }
  
  
  export type BearerElementType = {
    id: string
    type: 'bearer'
    name: string
    location: LocationType
    state: StateType
    temperature?: empty|StateType
    vibration?: empty|StateType
    data: BearerDataType
  }
  export type OilElementType = {
    id: string
    type: 'oil'
    name: string
    state: StateType
    oil: StateType
    data: OilDataType
  }
  export type RotorElementType = {
    id: string
    type: 'rotor'
    name: string
    replacementDate: string // дата последней замены // '12-02-2023'
    replacementWere: number // сколько дней прошло с момента последней замены
    replacementForecast: number // через сколько дней заменить (прогноз замены)
    replacementForecastState: StateType // текущее состояние ротора, зависит от прогноза замены
  }
  export type CoolerElementType = {
    id: string
    type: 'cooler'
    name: string
    data: CoolerDataType
  }
  export type MainEngineElementType = {
    id: string
    type: 'main-engine'
    name: string
    data: MainEngineDataType
  }
  export type GasCollectorElementType = {
    id: string
    type: 'gas-collector'
    name: string
    data: GasCollectorDataType
  }
  export type ValveElementType = {
    id: string
    type: 'valve'
    name: string
    isOpened: boolean
    isClosed: boolean
    data: ValveDataType
  }
  export type ElementType = BearerElementType|OilElementType|
    RotorElementType|CoolerElementType|MainEngineElementType|
    GasCollectorElementType|ValveElementType
  export type ElementsType = {
    'bearer-1': BearerElementType
    'bearer-2': BearerElementType
    'bearer-3': BearerElementType
    'bearer-4': BearerElementType
    'bearer-6': BearerElementType
    'bearer-7': BearerElementType
    'bearer-8': BearerElementType
    'bearer-9': BearerElementType
    'oil' : OilElementType
    'cooler': CoolerElementType
    'main-engine': MainEngineElementType
    'gas-collector': GasCollectorElementType
    'valve': ValveElementType
  }
  
}