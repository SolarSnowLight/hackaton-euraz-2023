import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import col = StyledCommon.col;
import row = StyledCommon.row;
import {ExausterDetailedDataTypes} from "./ExausterDetailedDataTypes";
import {CSSProperties} from "react";
import MainEngineElementType = ExausterDetailedDataTypes.MainEngineElementType;





export namespace ListViewSmall {
  
  
  import GasCollectorElementType = ExausterDetailedDataTypes.GasCollectorElementType;
  import center = StyledCommon.center;
  export type ListViewSmallProps = {
    style?: CSSProperties
    gasCollector: GasCollectorElementType
  }
  export function ListViewSmall({ style, gasCollector }: ListViewSmallProps){
    return <Card style={style}>
      <Col>
        
        <MarkRow>
          <WrapFlex1><Title>Разряжение, мм.в.ст</Title></WrapFlex1>
          <Value>{gasCollector.data.underpressure.value}</Value>
        </MarkRow>
        
        <MarkRow>
          <WrapFlex1><Title>Уровень пыли, мг/м³</Title></WrapFlex1>
          <Value>{gasCollector.data.dustLevel.value}</Value>
        </MarkRow>
        
      </Col>
    </Card>
  }
  
  const Card = styled.section`
    width: 160px;
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
    font: 400 11px/129% Roboto;
    color: white;
  `
  export const Value = styled.div`
    ${center};
    min-width: 40px;
    width: fit-content;
    padding: 3px 6px;
    background: #414F4F;
    border-radius: 4px;
    font: 400 12px/129% Roboto;
    color: white;
    white-space: nowrap;
  `
}