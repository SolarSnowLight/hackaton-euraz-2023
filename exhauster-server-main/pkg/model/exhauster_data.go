package model

/* Структура подшипника 1 */
type Bearing1Type struct {
	HeatingTemperature HeatingTemperatureType `json:"heating_temperature"`
	Vibration          VibrationType          `json:"vibration"`
}

func (bt *Bearing1Type) SetValues(values []float64) {
	// Heating Temperature
	bt.HeatingTemperature.Temperature = values[0]
	bt.HeatingTemperature.SetPoint.AlarmMax = values[1]
	bt.HeatingTemperature.SetPoint.AlarmMin = values[2]
	bt.HeatingTemperature.SetPoint.WarningMax = values[3]
	bt.HeatingTemperature.SetPoint.WarningMin = values[4]

	// Vibration Axial
	bt.Vibration.Axial = values[5]
	bt.Vibration.SetPointAxial.AlarmMax = values[6]
	bt.Vibration.SetPointAxial.AlarmMin = values[7]
	bt.Vibration.SetPointAxial.WarningMax = values[8]
	bt.Vibration.SetPointAxial.WarningMin = values[9]

	// Vibration Horizontal
	bt.Vibration.Horizontal = values[10]
	bt.Vibration.SetPointHorizontal.AlarmMax = values[11]
	bt.Vibration.SetPointHorizontal.AlarmMin = values[12]
	bt.Vibration.SetPointHorizontal.WarningMax = values[13]
	bt.Vibration.SetPointHorizontal.WarningMin = values[14]

	// Vibration Vertical
	bt.Vibration.Vertical = values[15]
	bt.Vibration.SetPointVertical.AlarmMax = values[16]
	bt.Vibration.SetPointVertical.AlarmMin = values[17]
	bt.Vibration.SetPointVertical.WarningMax = values[18]
	bt.Vibration.SetPointVertical.WarningMin = values[19]
}

/* Структура подшипника 1 */
type Bearing2Type struct {
	HeatingTemperature HeatingTemperatureType `json:"heating_temperature"`
}

func (bt *Bearing2Type) SetValues(values []float64) {
	// Heating Temperature
	bt.HeatingTemperature.Temperature = values[0]
	bt.HeatingTemperature.SetPoint.AlarmMax = values[1]
	bt.HeatingTemperature.SetPoint.AlarmMin = values[2]
	bt.HeatingTemperature.SetPoint.WarningMax = values[3]
	bt.HeatingTemperature.SetPoint.WarningMin = values[4]
}

/* Структура температуры перегрева */
type HeatingTemperatureType struct {
	Temperature float64      `json:"temperature"`
	SetPoint    SetPointType `json:"set_point"`
}

/* Структура установки */
type SetPointType struct {
	AlarmMax   float64 `json:"alarm_max"`
	AlarmMin   float64 `json:"alarm_min"`
	WarningMax float64 `json:"warning_max"`
	WarningMin float64 `json:"warning_min"`
}

/* Структура вибраций */
type VibrationType struct {
	Axial              float64      `json:"vibration_axial"`
	SetPointAxial      SetPointType `json:"set_point_axial"`
	Horizontal         float64      `json:"vibration_horizontal"`
	SetPointHorizontal SetPointType `json:"set_point_horizontal"`
	Vertical           float64      `json:"vibration_vertical"`
	SetPointVertical   SetPointType `json:"set_point_vertical"`
}

/* Структура охладителя */
type CoolerType struct {
	Oil   TemperatureType `json:"oil"`
	Water TemperatureType `json:"water"`
}

func (ct *CoolerType) SetValues(values []float64) {
	ct.Oil.TemperatureAfter = values[0]
	ct.Oil.TemperatureBefore = values[1]

	ct.Water.TemperatureAfter = values[2]
	ct.Water.TemperatureBefore = values[3]
}

/* Базовая структура температуры */
type TemperatureType struct {
	TemperatureAfter  float64 `json:"temperature_after"`
	TemperatureBefore float64 `json:"temperature_before"`
}

/* Структура газового коллектора */
type GasCollectorType struct {
	TemperatureBefore   float64 `json:"temperature_before"`
	UnderpressureBefore float64 `json:"underpressure_before"`
}

func (gst *GasCollectorType) SetValues(values []float64) {
	gst.TemperatureBefore = values[0]
	gst.UnderpressureBefore = values[1]
}

/* Структура маслосистемы */
type OilSystemType struct {
	OilLevel    float64 `json:"oil_level"`
	OilPressure float64 `json:"oil_pressure"`
}

func (ost *OilSystemType) SetValues(values []float64) {
	ost.OilLevel = values[0]
	ost.OilPressure = values[1]
}

/* Структура положения задвижки  */
type ValvePositionType struct {
	GasValveClosed   float64 `json:"gas_valve_closed"`
	GasValveOpen     float64 `json:"gas_valve_open"`
	GasValvePosition float64 `json:"gas_valve_position"`
}

func (vpt *ValvePositionType) SetValues(values []float64) {
	vpt.GasValveClosed = values[0]
	vpt.GasValveOpen = values[1]
	vpt.GasValvePosition = values[2]
}

/* Структура главного привода */
type MainDriveType struct {
	RotorCurrent  float64 `json:"rotor_current"`
	RotorVoltage  float64 `json:"rotor_voltage"`
	StatorCurrent float64 `json:"stator_current"`
	StatorVoltage float64 `json:"stator_voltage"`
}

func (mdt *MainDriveType) SetValues(values []float64) {
	mdt.RotorCurrent = values[0]
	mdt.RotorVoltage = values[1]
	mdt.StatorCurrent = values[2]
	mdt.StatorVoltage = values[3]
}
