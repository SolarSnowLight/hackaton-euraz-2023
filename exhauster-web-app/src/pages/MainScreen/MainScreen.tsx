import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import page = StyledCommon.page;
import Space from "src/components/Space";
import pageElement = StyledCommon.pageElement;
import {useState} from "react";
import {MockApi} from "src/api-map/mock-api";
import sinteringMachines = MockApi.sinteringMachines;
import CardHeader from "src/components/CardHeader";
import Legend from "../../components/Legend";
import { SinteringMachines } from "./SinteringMachines";
import Card from "src/components/Card";
import { useSocket } from "src/hooks/useSocket";



const MainScreen = ()=>{
  const [messages, sendMessage, removeMessage] = useSocket();
  const [updateTime, setUpdateTime] = useState(MockApi.updateTime)
  
  const [machines, setMachines] = useState(sinteringMachines)
  
  
  return <Page>
    <Space h={16}/>
    <PageElement>
      <Card>
        <CardHeader title='Главный экран'/>
        <Legend updateTime={updateTime} />
        <SinteringMachines.SinteringMachinesView machines={machines}/>
      </Card>
    </PageElement>
    <Space h={16}/>
  </Page>
}
export default MainScreen


const Page = styled.main`
  ${page};
`
const PageElement = styled.div`
  ${pageElement}
`


