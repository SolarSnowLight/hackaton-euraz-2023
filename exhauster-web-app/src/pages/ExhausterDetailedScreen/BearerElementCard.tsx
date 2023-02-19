import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import col = StyledCommon.col;
import center = StyledCommon.center;
import row = StyledCommon.row;
import {ExausterDetailedDataTypes} from "./ExausterDetailedDataTypes";
import {CSSProperties} from "react";





export namespace BearerElementCard {
  
  import BearerElementType = ExausterDetailedDataTypes.BearerElementType;
  import MarkType = ExausterDetailedDataTypes.MarkType;
  import StateType = ExausterDetailedDataTypes.StateType;
  export type BearerElementCardProps = {
    style?: CSSProperties|undefined
    bearer: BearerElementType
  }
  export function BearerElementCard({ bearer, style }: BearerElementCardProps){
    return <Card style={style}>
      <TitleBox><Title>{bearer.name}</Title></TitleBox>
      <MarksCol>
        
        <MarkRow state={bearer.data.temperature.state}>
          <div style={{ flex: 1 }}><div>{getMarkName(bearer.data.temperature.id)}</div></div>
          <div>{bearer.data.temperature.value}</div>
        </MarkRow>
  
        { bearer.data.verticalVibration && <MarkRow state={bearer.data.verticalVibration.state}>
          <div style={{ flex: 1 }}><div>{getMarkName(bearer.data.verticalVibration.id)}</div></div>
          <div>{bearer.data.verticalVibration.value}</div>
        </MarkRow> }
  
        { bearer.data.horizontalVibration && <MarkRow state={bearer.data.horizontalVibration.state}>
          <div style={{ flex: 1 }}><div>{getMarkName(bearer.data.horizontalVibration.id)}</div></div>
          <div>{bearer.data.horizontalVibration.value}</div>
        </MarkRow> }
  
        { bearer.data.axialVibration && <MarkRow state={bearer.data.axialVibration.state}>
          <div style={{ flex: 1 }}><div>{getMarkName(bearer.data.axialVibration.id)}</div></div>
          <div>{bearer.data.axialVibration.value}</div>
        </MarkRow> }
        
      </MarksCol>
    </Card>
  }
  
  const Card = styled.section`
    width: 120px;
    height: fit-content;
    background: #414F4F;
    border-radius: 10px;
    padding: 10px;
    ${col};
    gap: 10px;
    align-items: stretch;
  `
  
  const TitleBox = styled.div`
    ${center};
    border: 1px solid #8d9595;
  `
  const Title = styled.h5`
    font: 500 15px/129% Roboto;
    color: white;
  `
  const MarksCol = styled.div`
    ${col};
    gap: 4px;
  `
  const MarkRow = styled.div<{ state: StateType }>`
    ${row};
    font: 400 13px/129% Roboto;
    color: ${p=>p.state==='caution' ? 'black' : 'white'};
    padding: 0 5px;
    height: 19px;
    background: ${p=>p.state==='danger' ? '#EB5835' : (p.state==='caution' ? '#FAB82E' : 'none')};
    border-radius: 4px;
  `
  
  function getMarkName(markId: MarkType['id']){
    switch (markId){
      case "temperature": return 'Т, °C'
      case "vertical-vibration": return 'В, мм/с'
      case "horizontal-vibration": return 'Г, мм/с'
      case "axial-vibration": return 'О, мм/с'
      default: return 'null'
    }
  }
}