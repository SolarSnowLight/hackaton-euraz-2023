import styled from "styled-components";
import {StyledCommon} from "../style/styled-common";
import {CSSProperties} from "react";
import {ExausterDetailedDataTypes} from "../pages/ExhausterDetailedScreen/ExausterDetailedDataTypes";


export namespace LevelIndicator {
  
  import col = StyledCommon.col;
  import StateType = ExausterDetailedDataTypes.StateType;
  
  
  export type LevelIndicatorProps = {
    style?: CSSProperties|undefined
    value: number
    min: number
    max: number
    title: string
    barColor: string
  }
  export function LevelIndicator({ style, value, min, max, title, barColor }: LevelIndicatorProps){
    return <Frame style={style}>
      <Bar style={{
        background: barColor,
        width: (value-min)/(max-min)*100 + '%',
      }}/>
      <Col>
        <Value>{value}</Value>
        <Title>{title}</Title>
      </Col>
    </Frame>
  }
  
  const Frame = styled.section`
    width: 100%;
    height: 31px;
    display: grid;
    grid: 'c';
  `
  
  const Bar = styled.div`
    grid-area: c;
    place-self: stretch start;
    width: 0;
  `
  
  const Col = styled.div`
    grid-area: c;
    height: fit-content;
    place-self: center start;
    ${col};
    margin-left: 12px;
  `
  const Value = styled.div`
    font: 500 13px/129% Roboto;
    color: black;
  `
  const Title = styled.h6`
    font: 400 10px/129% Roboto;
    color: #262626;
  `
  
  export function stateToColor(state: StateType){
    switch (state){
      case 'ok': return '#9CC983'
      case 'caution': return '#FDC65F'
      case 'danger': return '#F18863'
    }
  }
}