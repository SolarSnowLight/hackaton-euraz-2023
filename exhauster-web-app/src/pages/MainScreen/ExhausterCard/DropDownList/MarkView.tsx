import ThermometerIc from "../../../../components/icons/ThermometerIc";
import RadioIc from "../../../../components/icons/RadioIc";
import WaterDropIc from "../../../../components/icons/WaterDropIc";

import { StyledCommon } from "src/style/styled-common";
import center = StyledCommon.center;
import styled from "styled-components";

import row = StyledCommon.row;
import {ExausterDetailedDataTypes} from "../../../ExhausterDetailedScreen/ExausterDetailedDataTypes";
import StateType = ExausterDetailedDataTypes.StateType;


export namespace MarkView {
  
  
  export type MarkViewType = 'temperature'|'vibration'|'oil'
  export type MarkViewProps = {
    mark: {
      type: MarkViewType
      state: StateType
    }
  }
  export function MarkView(props: MarkViewProps) {
    return <MarkBox state={props.mark.state}>
      { props.mark.type==='temperature' && <>
          <Symbol>T</Symbol>
          <IconBox><ThermometerIc mainColor={stateToColor(props.mark.state)} height='1em' /></IconBox>
      </> }
      { props.mark.type==='vibration' && <>
          <Symbol>V</Symbol>
          <IconBox><RadioIc mainColor={stateToColor(props.mark.state)} height='1em' /></IconBox>
      </> }
      { props.mark.type==='oil' && <>
          <Symbol>L</Symbol>
          <IconBox><WaterDropIc mainColor={stateToColor(props.mark.state)} height='1em' /></IconBox>
      </> }
    </MarkBox>
  }
  
  // показатель
  const MarkBox = styled.div<{ state: 'ok'|'caution'|'danger' }>`
    ${row};
    align-items: center;
    padding: 0 5px;
    gap: 3px;
    min-width: 37px;
    height: 20px;
    background: ${p=>stateToBgcColor(p.state)};
    border: 1px solid ${p=>stateToColor(p.state)};
    border-radius: 2px;
  `
  const IconBox = styled.div`
    flex: 1;
    ${center}
  `
  function stateToColor(state: StateType){
    switch (state){
      case 'ok': return '#CCCCCC'
      case 'caution': return '#F69112'
      case 'danger': return '#EB5835'
    }
  }
  function stateToBgcColor(state: StateType){
    switch (state){
      case 'ok': return '#F4F4F4'
      case 'caution': return '#FEF1DB'
      case 'danger': return '#FCDBCB'
    }
  }
  const Symbol = styled.div`
      font: 400 13px/129% Roboto;
      color: black;
    `
}