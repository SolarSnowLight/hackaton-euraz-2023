import {css} from "styled-components";

export namespace StyledCommon {
  
  export const reset = css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: none;
    min-width: 0;
    min-height: 0;
  `
  export const allDefault = css`
    all: unset;
    ${reset}
  `
  
  
  export const abs = css`
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
  `
  
  export const absoluteOff = (offset?: string) => css`
    position: absolute;
    ${offsetToPosition(offset)}
  `
  
  export const row = css`
    display: flex;
    flex-flow: row nowrap;
  `
  
  export const rowWrap = css`
    display: flex;
    flex-flow: row wrap;
  `
  
  export const col = css`
    display: flex;
    flex-flow: column nowrap;
  `
  
  export const center = css`
    display: grid;
    place-items: center;
  `
  export const centerV = css`
    display: grid;
    place-items: center start;
  `
  export const centerStart = centerV
  
  
  
  export const mobileFullWidth = css`
    @media (max-width: 550px) {
      width: 100%;
    }
  `
  
  
  export function offsetToPosition(offset?: string){
    if (offset){
      const parts = offset.trim().split(/\s+/)
      if (parts.length===2)
        return `top: ${parts[0]}; right: ${parts[1]}; bottom: ${parts[0]}; left: ${parts[1]};`
      if (parts.length===4)
        return `top: ${parts[0]}; right: ${parts[1]}; bottom: ${parts[2]}; left: ${parts[3]};`
    }
    return `top: 0; right: 0; bottom: 0; left: 0;`
  }
  
  
  
  export const page = css`
    width: 100%;
    min-height: 100vh;
    background: #F0F0F0;
    ${col};
    align-items: center;
  `
  
  export const pageElement = css`
    width: clamp(200px, 100%, 1920px);
    padding: 0 16px 0 16px;
    //padding: 0 64px 0 64px;
    //@media (max-width: 900px) {
    //  padding: 0 16px 0 16px;
    //}
  `
  
  
  export const resetInput = css`
    ${reset}
    &, &:hover, &:active, &:focus-visible, &:focus {
      outline: none;
      box-shadow: none;
      border: none;
      -webkit-tap-highlight-color: transparent;
    }
    &::placeholder {
      opacity: 1;
    }
  `
  export const resetButton = css`
    ${reset};
    outline: none;
    box-shadow: none;
    border: none;
    -webkit-tap-highlight-color: transparent;
    &:hover, &:active, &:focus-visible, &:focus {
      outline: none;
      box-shadow: none;
      border: none;
      -webkit-tap-highlight-color: transparent;
    }
  `
  export const resetUl = css`
    ${reset};
    ${col};
    list-style: none;
  `
  
  
  export const hideScrollbar = css`
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `
}


