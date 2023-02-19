import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import ExhausterSvg from "../../../components/ExhausterSvg";
import center = StyledCommon.center;
import {Item} from "./DropDownList/Item";

export namespace ExhausterScheme {
  
  import ItemType = Item.ItemType;
  export type ExhausterSchemeType = {
    bearers: ItemType[]
  }
  export function ExhausterScheme(props: ExhausterSchemeType){
    
    return <Card>
      <ExhausterSvg bearers={props.bearers}/>
    </Card>
  }
  const Card = styled.div`
    background: #EFF2F6;
    border: 2px solid #CED7E7;
    border-radius: 6px;
    ${center};
    padding: 10px;
  `
  
}