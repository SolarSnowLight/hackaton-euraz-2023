import { StyledCommon } from "src/style/styled-common";
import center = StyledCommon.center;
import styled from "styled-components";
import {ExausterDetailedDataTypes} from "./ExausterDetailedDataTypes";



export namespace BearerIndicator {
  
  
  
  
  import StateType = ExausterDetailedDataTypes.StateType;
  export type BearerIndicatorProps = {
    number: string|number
    state: StateType
  }
  export function BearerIndicator({ number, state }: BearerIndicatorProps) {
    return <Indicator state={state}>{number}</Indicator>
  }
  
  
  const Indicator = styled.div<{ state: 'ok'|'caution'|'danger' }>`
    ${center};
    width: 21px;
    height: 21px;
    background: ${p=>stateToBgcColor(p.state)};
    border: 2px solid ${p=>stateToColor(p.state)};
    border-radius: 4px;
    font: 500 14px/129% Roboto;
    color: #262626;
  `
  function stateToColor(state: StateType){
    switch (state){
      case 'ok': return '#414F4F'
      case 'caution': return '#F69112'
      case 'danger': return '#E32112'
    }
  }
  function stateToBgcColor(state: StateType){
    switch (state){
      case 'ok': return '#EFEFEF'
      case 'caution': return '#FEF1DB'
      case 'danger': return '#FCDBCB'
    }
  }
}