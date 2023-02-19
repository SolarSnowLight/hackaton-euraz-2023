import CautionRoundIc from "../../../components/icons/CautionRoundIc";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";


export namespace RotorReplacement {
  import col = StyledCommon.col;
  import row = StyledCommon.row;
  export type RotorReplacementProps = {
    daysPassed: number
    daysLeft: number
    state: 'ok'|'danger'|'caution'
  }
  export function RotorReplacement(props: RotorReplacementProps){
    return <Card_>
      <Row><Title>Последняя замена ротора</Title></Row>
      <Row>
        <TimePassed>{props.daysPassed} сут</TimePassed>
        <Forecast>
          <ForecastTitle>Прогноз</ForecastTitle>
          { props.state==='caution' && <CautionYellow/> }
          { props.state==='danger' && <CautionRed/> }
          <ForecastTime>{props.daysLeft} сут</ForecastTime>
        </Forecast>
      </Row>
    </Card_>
  }
  const Card_ = styled.div`
    background: #FAFAFA;
    border-radius: 4px;
    padding: 5px 20px;
    ${col};
    gap: 7px;
  `
  const Row = styled.div`
    ${row};
    gap: 15px;
    align-items: center;
  `
  const Title = styled.h5`
    font: 500 13px/129% Roboto;
    color: #2B2B2A;
  `
  const TimePassed = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 4px 10px;
    background: #F4F4F4;
    border-radius: 4px;
    font: 500 18px/129% Roboto;
    color: black;
  `
  const Forecast = styled.div`
    display: grid;
    gap: 1px 4px;
    grid: 't  i'
          'tm tm';
    place-items: center start;
  `
  const ForecastTitle = styled.div`
    grid-area: t;
    font: 400 13px/129% Roboto;
    color: #6E6E6D;
  `
  const CautionYellow = styled(CautionRoundIc).attrs({ mainColor: '#FAB82E', size: '1em' })``
  const CautionRed = styled(CautionRoundIc).attrs({ mainColor: '#EB5835', size: '1em' })``
  const ForecastTime = styled.div`
    grid-area: tm;
    font: 500 16px/129% Roboto;
    color: #565655;
  `
}