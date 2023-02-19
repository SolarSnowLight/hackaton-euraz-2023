import ExhausterCard from "src/pages/MainScreen/ExhausterCard/ExhausterCard";
import {MockApi} from "src/api-map/mock-api";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";


export namespace SinteringMachines {
  import SinteringMachineType = MockApi.SinteringMachineType;
  import rowWrap = StyledCommon.rowWrap;
  import col = StyledCommon.col;
  export type SinteringMachinesView = {
    machines: SinteringMachineType[]
  }
  export function SinteringMachinesView(props: SinteringMachinesView){
    return <MachinesList>
      { props.machines.map(it=><Machine key={it.id}>
        <Title>{it.name}</Title>
        <ExhausterList>
          { it.exhausters.map(it=><ExhausterCard key={it.id} exhauster={it} />) }
        </ExhausterList>
      </Machine>) }
    </MachinesList>
  }
  
  const MachinesList = styled.section`
    ${rowWrap};
    padding: 0 16px;
    gap: 16px 48px;
  `
  const Machine = styled.div`
    ${col};
    gap: 10px;
  `
  const Title = styled.h4`
    grid-area: t;
    justify-self: stretch;
    padding: 10px 20px;
    font: 400 15px/129% Roboto;
    color: #6E6E6D;
    background: #F4F4F4;
    border-radius: 4px 4px 0px 0px;
  `
  const ExhausterList = styled.div`
    ${rowWrap};
    gap: 10px;
  `
}