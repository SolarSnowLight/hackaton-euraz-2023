import {useEffect, useMemo, useState} from "react";
import Space from "src/components/Space";
import Card from "src/components/Card";
import CardHeader from "src/components/CardHeader";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import page = StyledCommon.page;
import pageElement = StyledCommon.pageElement;
import Legend from "src/components/Legend";
import {ExhausterDetailedView} from "./ExhausterDetailedView";
import {Navigate, Route, Routes, useMatch, useNavigate, useParams} from "react-router-dom";
import {MockApi} from "src/api-map/mock-api";
import {TileSelect} from "src/components/TileSelect";
import {ExausterDetailedDataTypes} from "./ExausterDetailedDataTypes";
import row = StyledCommon.row;
import TileId = TileSelect.TileId;
import ElementType = ExausterDetailedDataTypes.ElementType;



export namespace ExhausterDetailedScreen {
  
  
  
  const tiles = [
    { id: 'scheme', title: 'Мнемосхема' },
    { id: 'chart', title: 'График' },
  ]
  
  export function ExhausterDetailedScreen(){
  
    const [updateTime, setUpdateTime] = useState(MockApi.updateTime)
    
    const exhausterId = useParams().id
    
    const exhauster = useMemo(()=>{
      return MockApi.exhausters.find(it=>it.id===exhausterId)
    },[exhausterId])
    
    const navigate = useNavigate()
    
    const screen = useMatch('exhauster-detailed/:id/:screen')?.params.screen
    const onScreenSelect = (screen: TileId) =>
      navigate(`/exhauster-detailed/${exhausterId}/${screen}`, { replace: true })
    
    if (!exhauster) return <Navigate to='/main-screen' replace={true} />
    if (!['scheme','chart'].includes(screen as any))
      return <Navigate to={`/exhauster-detailed/${exhausterId}/scheme`} replace={true} />
    
    return <Page>
      <Space h={16}/>
      <TileSelectFrame>
        <TileSelect.TileSelect tiles={tiles} selected={[screen]} onSelect={onScreenSelect} />
      </TileSelectFrame>
      <Space h={16}/>
      <PageElement>
        <Card>
          
          <CardHeader title={exhauster.name} />
  
          <Routes>
            <Route path={'scheme'} element={
              <ExhausterDetailedViewFrame
                elements={exhauster.allElements}
                updateTime={updateTime}
              />
            }/>
            <Route path={'chart'} element={<div>здесь должны быть графики...</div>}/>
            <Route path='*' element={<Navigate to={'scheme'} replace={true} />} />
          </Routes>
          
        </Card>
      </PageElement>
      <Space h={16}/>
    </Page>
  }
  
  
  const Page = styled.main`
    ${page};
  `
  const PageElement = styled.div`
    ${pageElement};
  `
  const TileSelectFrame = styled.div`
    ${pageElement};
    ${row};
    justify-content: end;
  `
  
  
  type ExhausterDetailedViewFrameProps = {
    elements: ElementType[]
    updateTime: number
  }
  function ExhausterDetailedViewFrame({ elements, updateTime }: ExhausterDetailedViewFrameProps){
    return <Frame>
      <ItemFrame>
        <Legend mode={['dangers']} updateTime={updateTime}/>
      </ItemFrame>
      <ItemFrame>
        <ExhausterDetailedView.ExhausterDetailedView elements={elements}/>
      </ItemFrame>
    </Frame>
  }
  const Frame = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid: 'c';
  `
  const ItemFrame = styled.div`
    grid-area: c;
    place-self: start stretch;
  `
  
  
}