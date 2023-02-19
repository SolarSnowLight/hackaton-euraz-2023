import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import col = StyledCommon.col;
import row = StyledCommon.row;
import {ExausterDetailedDataTypes} from "./ExausterDetailedDataTypes";
import {CSSProperties} from "react";
import MainEngineElementType = ExausterDetailedDataTypes.MainEngineElementType;





export namespace ListView {
  
  
  export type ListViewProps = {
    style?: CSSProperties
    mainEnginge: MainEngineElementType
  }
  export function ListView({ style, mainEnginge }: ListViewProps){
    return <Card style={style}>
      <Col>
        
        <MarkRow>
          <WrapFlex1><Title>Ток ротора, А</Title></WrapFlex1>
          <Value>{mainEnginge.data.rotorCurrent.value}</Value>
        </MarkRow>
        
        <MarkRow>
          <WrapFlex1><Title>Ток статора, А</Title></WrapFlex1>
          <Value>{mainEnginge.data.statorCurrent.value}</Value>
        </MarkRow>
        
        <MarkRow>
          <WrapFlex1><Title>Напряжение ротора, кВт</Title></WrapFlex1>
          <Value>{mainEnginge.data.rotorVoltage.value}</Value>
        </MarkRow>
        
        <MarkRow>
          <WrapFlex1><Title>Напряжние статора, кВт</Title></WrapFlex1>
          <Value>{mainEnginge.data.statorVoltage.value}</Value>
        </MarkRow>
        
      </Col>
    </Card>
  }
  
  const Card = styled.section`
    width: 210px;
    height: fit-content;
    ${col};
    gap: 3px;
    align-items: stretch;
  `
  
  const Col = styled.div`
    ${col};
    gap: 4px;
  `
  const MarkRow = styled.div`
    ${row};
    align-items: center;
  `
  const WrapFlex1 = styled.div`
    flex: 1;
  `
  const Title = styled.div`
    font: 500 12px/129% Roboto;
    color: black;
  `
  export const Value = styled.div`
    width: fit-content;
    padding: 3px 6px;
    background: #414F4F;
    border-radius: 4px;
    font: 400 12px/129% Roboto;
    color: white;
    white-space: nowrap;
  `
}