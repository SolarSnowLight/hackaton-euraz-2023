import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import col = StyledCommon.col;
import Space from "src/components/Space";
import {MockApi} from "src/api-map/mock-api";
import ExhausterType = MockApi.ExhausterType;
import { Header } from "./Header";
import { RotorTitle } from "./RotorTitle";
import { RotorReplacement } from "./RotorReplacement";
import { DropDownList } from "./DropDownList/DropDownList";
import {ExhausterScheme} from "./ExhausterScheme";
import {useState} from "react";
import {Item} from "./DropDownList/Item";
import ItemType = Item.ItemType;





export type ExhausterCardProps = {
  exhauster: ExhausterType
}
function ExhausterCard(props: ExhausterCardProps){
  
  const [selectedBearers, setSelectedBearers] = useState<ItemType[]>([])
  
  return <Exhauster>
    <Header.Header name={props.exhauster.name} isWorking={props.exhauster.isWorking} id={props.exhauster.id}/>
    <MainContentFrame>
      <Space h={10}/>
      <RotorTitle.RotorTitle
        name={props.exhauster.rotor.name}
        replacementDate={props.exhauster.rotor.replacementDate}
      />
      <Space h={15}/>
      <Line/>
      <Space h={15}/>
      <RotorReplacement.RotorReplacement
        daysPassed={props.exhauster.rotor.replacementWere}
        daysLeft={props.exhauster.rotor.replacementForecast}
        state={props.exhauster.rotor.replacementForecastState}
      />
      <Space h={15}/>
      
      <ExhausterScheme.ExhausterScheme bearers={selectedBearers}/>
      
      <Space h={15}/>
      
      <DropDownList.DropDownList
        title='Предупреждения'
        items={[...props.exhauster.bearers, props.exhauster.oil].filter(it=>
          ['caution','danger'].includes(it['state'])
        )}
        setSelectedBearers={setSelectedBearers}
      />
      
      <Space h={10}/>
      
      <DropDownList.DropDownList
        title='Исправные элементы'
        items={[...props.exhauster.bearers, props.exhauster.oil].filter(it=>
          !['caution','danger'].includes(it['state'])
        )}
        setSelectedBearers={setSelectedBearers}
      />
      
      <Space h={15}/>
    </MainContentFrame>
  </Exhauster>
}
export default ExhausterCard

const Exhauster = styled.section`
  width: 288px;
  height: fit-content;
  ${col};
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  overflow: hidden;
`



const MainContentFrame = styled.div`
  ${col};
  padding: 0 10px;
`



const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #EFEFEF;
`

