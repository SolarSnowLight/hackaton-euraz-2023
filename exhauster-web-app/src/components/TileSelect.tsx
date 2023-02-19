import styled from "styled-components";
import {StyledCommon} from "../style/styled-common";
import {Utils} from "src/utils/utils";


export namespace TileSelect {
  
  import row = StyledCommon.row;
  import empty = Utils.empty;
  
  export type TileId = string|number|empty
  export type Tile = {
    id: TileId
    title: string
  }
  export type TileSelectProps = {
    tiles: Tile[]
    selected: TileId[]
    onSelect: (tileId: TileId)=>void
  }
  export function TileSelect({ tiles, selected, onSelect }: TileSelectProps){
  
    return <Frame>
      { tiles.map(it=><Tile
        key={it.id}
        onClick={()=>onSelect(it.id)}
        selected={selected.includes(it.id)}
      >
        {it.title}
      </Tile>) }
    </Frame>
  }
  
  const Frame = styled.section`
    background: #FFFFFF;
    border-radius: 4px;
    padding: 6px;
    ${row};
    align-items: center;
  `
  const Tile = styled.div<{ selected: boolean }>`
    background: ${p=>p.selected ? '#FAB82E' : 'none'};
    border-radius: 4px;
    padding: 5px 12px;
    font: 500 12px/129% Roboto;
    color: ${p=>p.selected ? 'black' : '#F9A823'};
    cursor: pointer;
  `
  
}