import ThermometerIc from "src/components/icons/ThermometerIc";
import RadioIc from "src/components/icons/RadioIc";
import WaterDropIc from "src/components/icons/WaterDropIc";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import rowWrap = StyledCommon.rowWrap;
import row = StyledCommon.row;
import {useEffect, useState} from "react";
import {MockApi} from "../api-map/mock-api";
import updateTime = MockApi.updateTime;
import {DateTime} from "../utils/DateTime";


type LegendProps = {
  updateTime: number
  mode?: ('marks'|'dangers')[]
}
const Legend = ({ mode = ['marks','dangers'] }: LegendProps)=>{
  
  const getMsPassed = () => {
    return (+new Date() - updateTime)
  }
  const [msPasses, setMsPasses] = useState(()=>getMsPassed())
  useEffect(()=>{
    const id = setInterval(()=>setMsPasses(getMsPassed()),1000)
    return ()=>clearInterval(id)
  },[updateTime])
  
  const hours = Math.floor(msPasses/1000/60/60)
  const minutes = Math.floor((msPasses - hours*1000*60*60)/1000/60)
  const seconds = Math.floor((msPasses - hours*1000*60*60 - minutes*1000*60)/1000)
  
  return <Row>
    
    <WrapFlex1>
      <div>Данные обновлены {hours && `${hours} час `}{(hours||minutes) && `${minutes} мин `}{(hours||minutes||seconds) && `${seconds} сек `}назад</div>
    </WrapFlex1>
    
    { mode.includes('marks') && <>
      <Element>
          <LetterIcon>
              <Letter>T</Letter>
              <Thermometer/>
          </LetterIcon>
          <Title>Температура</Title>
      </Element>

      <Element>
          <LetterIcon>
              <Letter>V</Letter>
              <Radio/>
          </LetterIcon>
          <Title>Вибрация</Title>
      </Element>

      <Element>
          <LetterIcon>
              <Letter>L</Letter>
              <WaterDrop/>
          </LetterIcon>
          <Title>Уровень масла</Title>
      </Element>
    </> }
  
    { mode.includes('dangers') && <>
      <Element>
          <YellowSquare/>
          <Title>Предупреждение</Title>
      </Element>

      <Element>
          <RedSquare/>
          <Title>Опасность</Title>
      </Element>
    </> }
  
  </Row>
}
export default Legend



const Row = styled.section`
  ${rowWrap};
  padding: 16px;
  gap: 16px 20px;
  align-content: center;
  justify-content: end;
`
const WrapFlex1 = styled.div`
  flex: 1;
  font: 400 13px/129% Roboto;
  color: #2B2B2A;
`

const Element = styled.div`
  ${row};
  gap: 8px;
  align-items: center;
`
const LetterIcon = styled.div`
  ${row};
  //gap: 8px;
  align-items: center;
`
const Letter = styled.div`
  font: 400 13px/129% Roboto;
  color: #2B2B2A;
`
const Thermometer = styled(ThermometerIc).attrs({ mainColor: 'black' })`
  height: 1em;
`
const Radio = styled(RadioIc).attrs({ mainColor: 'black' })`
  height: 1em;
  margin-left: 2px;
  translate: 0 0.04em;
`
const WaterDrop = styled(WaterDropIc).attrs({ mainColor: 'black' })`
  height: 1em;
`
const YellowSquare = styled.div`
  height: 1em;
  aspect-ratio: 1;
  background: #F9A823;
  border-radius: 2px;
`
const RedSquare = styled(YellowSquare)`
  background: #E32112;
`
const Title = styled.div`
  font: 300 13px/129% Roboto;
  color: #2B2B2A;
`
