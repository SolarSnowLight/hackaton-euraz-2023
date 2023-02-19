import {Utils} from "src/utils/utils";
import nextId = Utils.nextId;
import {DateTime} from "src/utils/DateTime";
import {ExausterDetailedDataTypes} from "../pages/ExhausterDetailedScreen/ExausterDetailedDataTypes";
import OilElementType = ExausterDetailedDataTypes.OilElementType;
import BearerElementType = ExausterDetailedDataTypes.BearerElementType;
import MarkType = ExausterDetailedDataTypes.MarkType;
import StateType = ExausterDetailedDataTypes.StateType;
import isPresent = Utils.isPresent;
import CoolerElementType = ExausterDetailedDataTypes.CoolerElementType;
import MainEngineElementType = ExausterDetailedDataTypes.MainEngineElementType;
import ElementType = ExausterDetailedDataTypes.ElementType;
import RotorElementType = ExausterDetailedDataTypes.RotorElementType;


export namespace MockApi {
  
  
  import GasCollectorElementType = ExausterDetailedDataTypes.GasCollectorElementType;
  import ValveElementType = ExausterDetailedDataTypes.ValveElementType;
  
  function getDataMarkState(mark: MarkType){
    if (
      isPresent(mark.maxDanger) && mark.value>=mark.maxDanger ||
      isPresent(mark.minDanger) && mark.value<=mark.minDanger
    ) return 'danger'
    if (
      isPresent(mark.maxCaution) && mark.value>=mark.maxCaution ||
      isPresent(mark.minCaution) && mark.value<=mark.minCaution
    ) return 'caution'
    return 'ok'
  }
  
  
  
  
  const valves: ValveElementType[] = [
    {
      id: nextId(),
      type: 'valve',
      name: 'Клапан',
      get isOpened(){ return this.data.position.value===100 },
      get isClosed(){ return this.data.position.value===0 },
      data: {
        position: {
          id: 'position',
          value: 40,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'valve',
      name: 'Клапан',
      get isOpened(){ return this.data.position.value===100 },
      get isClosed(){ return this.data.position.value===0 },
      data: {
        position: {
          id: 'position',
          value: 0,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'valve',
      name: 'Клапан',
      get isOpened(){ return this.data.position.value===100 },
      get isClosed(){ return this.data.position.value===0 },
      data: {
        position: {
          id: 'position',
          value: 99,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'valve',
      name: 'Клапан',
      get isOpened(){ return Math.round(this.data.position.value)===100 },
      get isClosed(){ return Math.round(this.data.position.value)===0 },
      data: {
        position: {
          id: 'position',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
      }
    },
  ]
  
  
  
  
  const gasCollectors: GasCollectorElementType[] = [
    {
      id: nextId(),
      type: 'gas-collector',
      name: 'Дымосос',
      data: {
        temperature: {
          id: 'temperature',
          value: 45,
          get state(){ return getDataMarkState(this) },
        },
        underpressure: {
          id: 'underpressure',
          value: 74.3,
          get state(){ return getDataMarkState(this) },
        },
        dustLevel: {
          id: 'dust-level',
          value: 15,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'gas-collector',
      name: 'Дымосос',
      data: {
        temperature: {
          id: 'temperature',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        underpressure: {
          id: 'underpressure',
          value: 74.3,
          get state(){ return getDataMarkState(this) },
        },
        dustLevel: {
          id: 'dust-level',
          value: 15,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'gas-collector',
      name: 'Дымосос',
      data: {
        temperature: {
          id: 'temperature',
          value: 150,
          get state(){ return getDataMarkState(this) },
        },
        underpressure: {
          id: 'underpressure',
          value: 74.3,
          get state(){ return getDataMarkState(this) },
        },
        dustLevel: {
          id: 'dust-level',
          value: 15,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'gas-collector',
      name: 'Дымосос',
      data: {
        temperature: {
          id: 'temperature',
          value: 180,
          get state(){ return getDataMarkState(this) },
        },
        underpressure: {
          id: 'underpressure',
          value: 74.3,
          get state(){ return getDataMarkState(this) },
        },
        dustLevel: {
          id: 'dust-level',
          value: 15,
          get state(){ return getDataMarkState(this) },
        },
      }
    },
  ]
  
  
  
  
  
  const mainEngines: MainEngineElementType[] = [
    {
      id: nextId(),
      type: 'main-engine',
      name: 'Главный привод',
      data: {
        rotorCurrent: {
          id: 'rotor-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        rotorVoltage: {
          id: 'rotor-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorCurrent: {
          id: 'stator-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorVoltage: {
          id: 'stator-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'main-engine',
      name: 'Главный привод',
      data: {
        rotorCurrent: {
          id: 'rotor-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        rotorVoltage: {
          id: 'rotor-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorCurrent: {
          id: 'stator-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorVoltage: {
          id: 'stator-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'main-engine',
      name: 'Главный привод',
      data: {
        rotorCurrent: {
          id: 'rotor-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        rotorVoltage: {
          id: 'rotor-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorCurrent: {
          id: 'stator-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorVoltage: {
          id: 'stator-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'main-engine',
      name: 'Главный привод',
      data: {
        rotorCurrent: {
          id: 'rotor-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        rotorVoltage: {
          id: 'rotor-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorCurrent: {
          id: 'stator-current',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
        statorVoltage: {
          id: 'stator-voltage',
          value: 100,
          get state(){ return getDataMarkState(this) },
        },
      }
    },
  ]
  
  
  
  const coolers: CoolerElementType[] = [
    {
      id: nextId(),
      type: 'cooler',
      name: 'Охладитель',
      data: {
        oilTemperatureBefore: {
          id: 'oil-temperature-before',
          value: 88,
          get state(){ return getDataMarkState(this) },
        },
        oilTemperatureAfter: {
          id: 'oil-temperature-after',
          value: 23,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureBefore: {
          id: 'water-temperature-before',
          value: 10,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureAfter: {
          id: 'water-temperature-after',
          value: 66,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'cooler',
      name: 'Охладитель',
      data: {
        oilTemperatureBefore: {
          id: 'oil-temperature-before',
          value: 88,
          get state(){ return getDataMarkState(this) },
        },
        oilTemperatureAfter: {
          id: 'oil-temperature-after',
          value: 23,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureBefore: {
          id: 'water-temperature-before',
          value: 10,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureAfter: {
          id: 'water-temperature-after',
          value: 66,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'cooler',
      name: 'Охладитель',
      data: {
        oilTemperatureBefore: {
          id: 'oil-temperature-before',
          value: 88,
          get state(){ return getDataMarkState(this) },
        },
        oilTemperatureAfter: {
          id: 'oil-temperature-after',
          value: 23,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureBefore: {
          id: 'water-temperature-before',
          value: 10,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureAfter: {
          id: 'water-temperature-after',
          value: 66,
          get state(){ return getDataMarkState(this) },
        },
      }
    },{
      id: nextId(),
      type: 'cooler',
      name: 'Охладитель',
      data: {
        oilTemperatureBefore: {
          id: 'oil-temperature-before',
          value: 88,
          get state(){ return getDataMarkState(this) },
        },
        oilTemperatureAfter: {
          id: 'oil-temperature-after',
          value: 23,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureBefore: {
          id: 'water-temperature-before',
          value: 10,
          get state(){ return getDataMarkState(this) },
        },
        waterTemperatureAfter: {
          id: 'water-temperature-after',
          value: 66,
          get state(){ return getDataMarkState(this) },
        },
      }
    },
  ]
  
  
  
  function getOilState(oil: OilElementType){
    return oil.oil
  }
// состояние масла эксгаустера
  const oils: OilElementType[] = [
    {
      id: nextId(),
      type: 'oil',
      name: 'Уровень масла',
      get state(){ return getOilState(this) },
      oil: 'ok' as StateType,
      data: {
        level: {
          id: 'level',
          value: 40,
          get state(){ return getDataMarkState(this) },
          minCaution: 40,
          minDanger: 20,
        },
        pressure: {
          id: 'pressure',
          value: 2.5,
          get state(){ return getDataMarkState(this) },
          minCaution: 3.5,
          minDanger: 2.5,
        },
      }
    },{
      id: nextId(),
      type: 'oil',
      name: 'Уровень масла',
      get state(){ return getOilState(this) },
      oil: 'caution' as StateType,
      data: {
        level: {
          id: 'level',
          value: 50,
          get state(){ return getDataMarkState(this) },
          minCaution: 40,
          minDanger: 20,
        },
        pressure: {
          id: 'pressure',
          value: 3,
          get state(){ return getDataMarkState(this) },
          minCaution: 3.5,
          minDanger: 2.5,
        },
      }
    },{
      id: nextId(),
      type: 'oil',
      name: 'Уровень масла',
      get state(){ return getOilState(this) },
      oil: 'danger' as StateType,
      data: {
        level: {
          id: 'level',
          value: 70,
          get state(){ return getDataMarkState(this) },
          minCaution: 40,
          minDanger: 20,
        },
        pressure: {
          id: 'pressure',
          value: 4,
          get state(){ return getDataMarkState(this) },
          minCaution: 3.5,
          minDanger: 2.5,
        },
      }
    },{
      id: nextId(),
      type: 'oil',
      name: 'Уровень масла',
      get state(){ return getOilState(this) },
      oil: 'ok' as StateType,
      data: {
        level: {
          id: 'level',
          value: 15,
          get state(){ return getDataMarkState(this) },
          minCaution: 40,
          minDanger: 20,
        },
        pressure: {
          id: 'pressure',
          value: 1.5,
          get state(){ return getDataMarkState(this) },
          minCaution: 3.5,
          minDanger: 2.5,
        },
      }
    },
  ]
  
  
  
  function getTemeperature(bearer: BearerElementType){
    return bearer.data.temperature.state
  }
  function getVibraition(bearer: BearerElementType){
    if (
      bearer.data.verticalVibration?.state==='danger' ||
      bearer.data.horizontalVibration?.state==='danger' ||
      bearer.data.axialVibration?.state==='danger'
    ) return 'danger'
    else if (
      bearer.data.verticalVibration?.state==='caution' ||
      bearer.data.horizontalVibration?.state==='caution' ||
      bearer.data.axialVibration?.state==='caution'
    ) return 'caution'
    else if (
      bearer.data.verticalVibration?.state==='ok' &&
      bearer.data.horizontalVibration?.state==='ok' &&
      bearer.data.axialVibration?.state==='ok'
    ) return 'ok'
    else return undefined
  }
  function getBearerState(bearer: BearerElementType){
    if (bearer.temperature==='danger' || bearer.vibration==='danger') return 'danger'
    else if (bearer.temperature==='caution' || bearer.vibration==='caution') return 'caution'
    else return 'ok'
  }
  // состояние подшипников эксгаустера
  const bearers: BearerElementType[] = [
    {
      id: nextId(),
      type: 'bearer',
      name: '№ 1 п-к',
      location: 'bearer-1',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 300,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 2 п-к',
      location: 'bearer-2',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 3 п-к',
      location: 'bearer-3',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 4 п-к',
      location: 'bearer-4',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 300,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 5 п-к',
      location: 'bearer-5',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 6 п-к',
      location: 'bearer-6',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 7 п-к',
      location: 'bearer-7',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 8 п-к',
      location: 'bearer-8',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 9 п-к',
      location: 'bearer-9',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 1 п-к',
      location: 'bearer-1',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 2 п-к',
      location: 'bearer-2',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 3 п-к',
      location: 'bearer-3',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 4 п-к',
      location: 'bearer-4',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 300,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 5 п-к',
      location: 'bearer-5',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 300,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 6 п-к',
      location: 'bearer-6',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 7 п-к',
      location: 'bearer-7',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 8 п-к',
      location: 'bearer-8',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 9 п-к',
      location: 'bearer-9',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 1 п-к',
      location: 'bearer-1',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 400,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 2 п-к',
      location: 'bearer-2',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 3 п-к',
      location: 'bearer-3',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 4 п-к',
      location: 'bearer-4',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 400,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 5 п-к',
      location: 'bearer-5',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 6 п-к',
      location: 'bearer-6',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 7 п-к',
      location: 'bearer-7',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 400,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 8 п-к',
      location: 'bearer-8',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 9 п-к',
      location: 'bearer-9',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 1 п-к',
      location: 'bearer-1',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 2 п-к',
      location: 'bearer-2',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 3 п-к',
      location: 'bearer-3',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 400,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 4 п-к',
      location: 'bearer-4',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 5 п-к',
      location: 'bearer-5',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 6 п-к',
      location: 'bearer-6',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 7 п-к',
      location: 'bearer-7',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 8 п-к',
      location: 'bearer-8',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
        verticalVibration: {
          id: 'vertical-vibration',
          value: 22,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        horizontalVibration: {
          id: 'horizontal-vibration',
          value: 10,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
        axialVibration: {
          id: 'axial-vibration',
          value: 0,
          get state(){ return getDataMarkState(this) },
          maxCaution: 10,
          maxDanger: 20,
        },
      }
    },{
      id: nextId(),
      type: 'bearer',
      name: '№ 9 п-к',
      location: 'bearer-9',
      get temperature(){ return getTemeperature(this) },
      get vibration(){ return getVibraition(this) },
      get state(){ return getBearerState(this) },
      data: {
        temperature: {
          id: 'temperature',
          value: 220,
          get state(){ return getDataMarkState(this) },
          maxCaution: 300,
          maxDanger: 400,
        },
      }
    },
  ]
  
  
  // роторы эксгаустеров
  const rotors: RotorElementType[] = [
    {
      id: nextId(),
      type: 'rotor',
      name: 'Ротор № 35к',
      // дата последней замены
      replacementDate: '12-02-2023',
      // сколько дней прошло с момента последней замены
      get replacementWere(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      // через сколько дней заменить (прогноз замены)
      replacementForecast: 12,
      // текущее состояние ротора, зависит от прогноза замены
      get replacementForecastState(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },{
      id: nextId(),
      type: 'rotor',
      name: 'Ротор № 47',
      replacementDate: '14-02-2023',
      get replacementWere(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      replacementForecast: 9,
      get replacementForecastState(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },{
      id: nextId(),
      type: 'rotor',
      name: 'Ротор № 37',
      replacementDate: '1-02-2023',
      get replacementWere(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      replacementForecast: 3,
      get replacementForecastState(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },{
      id: nextId(),
      type: 'rotor',
      name: 'Ротор № 32',
      replacementDate: '30-01-2023',
      get replacementWere(){ return DateTime.from_dd_MM_yyyy(this.replacementDate)!.getDays() },
      replacementForecast: 1,
      get replacementForecastState(){ return this.replacementForecast<=3 ? 'danger' : (this.replacementForecast<=10 ? 'caution' : 'ok') },
    },
  ]
  
  // эксгаустеры
  export type ExhausterType = typeof exhausters[number]
  export const exhausters = [
    {
      id: nextId(),
      name: 'Эксгаустер № 1 (У-171)',
      isWorking: true,
      bearers: bearers.slice(0,9),
      rotor: rotors[0],
      oil: oils[0], // уровень и давление масла
      cooler: coolers[0],
      mainEngine: mainEngines[0],
      gasCollector: gasCollectors[0],
      valve: valves[0],
      get allElements(): ElementType[] { return [...this.bearers, this.oil, this.rotor, this.cooler, this.mainEngine, this.gasCollector, this.valve] },
    },{
      id: nextId(),
      name: 'Эксгаустер № 2 (У-172)',
      isWorking: true,
      bearers: bearers.slice(9,18),
      rotor: rotors[1],
      oil: oils[1],
      cooler: coolers[1],
      mainEngine: mainEngines[1],
      gasCollector: gasCollectors[1],
      valve: valves[1],
      get allElements(): ElementType[] { return [...this.bearers, this.oil, this.rotor, this.cooler, this.mainEngine, this.gasCollector, this.valve] },
    },{
      id: nextId(),
      name: 'Эксгаустер № 3 (Ф-171)',
      isWorking: false,
      bearers: bearers.slice(18,27),
      rotor: rotors[2],
      oil: oils[2],
      cooler: coolers[2],
      mainEngine: mainEngines[2],
      gasCollector: gasCollectors[2],
      valve: valves[2],
      get allElements(): ElementType[] { return [...this.bearers, this.oil, this.rotor, this.cooler, this.mainEngine, this.gasCollector, this.valve] },
    },{
      id: nextId(),
      name: 'Эксгаустер № 4 (Ф-172)',
      isWorking: false,
      bearers: bearers.slice(27,36),
      rotor: rotors[3],
      oil: oils[3],
      cooler: coolers[3],
      mainEngine: mainEngines[3],
      gasCollector: gasCollectors[3],
      valve: valves[3],
      get allElements(): ElementType[] { return [...this.bearers, this.oil, this.rotor, this.cooler, this.mainEngine, this.gasCollector, this.valve] },
    },
  ]
  
  // агломашины
  export type SinteringMachineType = typeof sinteringMachines[number]
  export const sinteringMachines = [
    { id: nextId(), name: 'Агломашина №1', exhausters: exhausters.slice(0,2) },
    { id: nextId(), name: 'Агломашина №2', exhausters: exhausters.slice(2,4) },
  ]
  
  // время обновления данных
  export const updateTime = 1676760790593
}