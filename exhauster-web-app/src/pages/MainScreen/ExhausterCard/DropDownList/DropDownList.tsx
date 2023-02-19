import {useEffect, useState} from "react";
import Arrow1Right from "../../../../components/icons/Arrow1Right";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import { Item } from "./Item";


export namespace DropDownList {
  
  import col = StyledCommon.col;
  import row = StyledCommon.row;
  import resetButton = StyledCommon.resetButton;
  import center = StyledCommon.center;
  import ItemType = Item.ItemType;
  export type DropDownListProps = {
    title: string
    items: Item.ItemType[]
    setSelectedBearers: (selectedBearers: ItemType[])=>void
  }
  export function DropDownList(props: DropDownListProps){
    
    const [isOpened, setIsOpened] = useState(false)
    
    //useEffect(()=>{ isOpened && setTimeout(()=>setIsOpened(false),3000) },[isOpened])
    
    const [hoveredItem, setHoveredItem] = useState(undefined as undefined|ItemType)
    useEffect(()=>{
      if (hoveredItem) setHoveredItem(props.items.find(it=>
        it.type===hoveredItem.type && it.id===hoveredItem.id
      ))
    },[props.items])
    useEffect(()=>{
      if (hoveredItem) props.setSelectedBearers([hoveredItem])
      else props.setSelectedBearers([])
    },[hoveredItem])
    
    const setHovered = (item: ItemType, isHovered: boolean, ...message: string[])=>{
      //console.log('setHovered', item, isHovered, message[0])
      if (isHovered) setHoveredItem(item)
      else setHoveredItem(undefined)
    }
    
    return <View
      // костыль, которого всё равно мало
      onMouseLeave={()=>setHoveredItem(undefined)}
    >
      
      <TitleFrame onClick={()=>setIsOpened(!isOpened)}>
        <TitleButton>{ isOpened ? <ArrowOpened/> : <ArrowClosed/> }</TitleButton>
        <Title>{props.title}</Title>
      </TitleFrame>
      
      { isOpened && <ItemList>
        { props.items.map(it=><Item.Item key={it.id} item={it} setHovered={setHovered} />) }
      </ItemList> }
    
    </View>
  }
  const View = styled.section`
    ${col};
    width: 100%;
    height: fit-content;
    gap: 10px;
  `
  const TitleFrame = styled.div`
    ${row};
    gap: 6px;
    align-items: center;
    cursor: pointer;
  `
  const TitleButton = styled.button`
    ${resetButton};
    width: 20px; height: 20px;
    ${center};
    background: #EFEFEF;
    border-radius: 3px;
    cursor: pointer;
  `
  const ArrowClosed = styled(Arrow1Right).attrs({ mainColor: '#565655', size: 8 })``
  const ArrowOpened = styled(Arrow1Right).attrs({ mainColor: '#565655', size: 8 })`
    rotate: 90deg;
  `
  const Title = styled.h4`
    font: 500 13px/129% Roboto;
    color: #2B2B2A;
  `
  
  const ItemList = styled.div`
    align-self: stretch;
    height: fit-content;
    margin-left: 14px;
    ${col};
    gap: 4px;
  `
  
  
}