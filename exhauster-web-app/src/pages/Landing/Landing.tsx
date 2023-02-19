import React from 'react';
import logo from 'src/res/icon/react-logo.svg'
import {ReactUtils} from "src/utils/react-utils";
import ReactMemoTyped = ReactUtils.ReactMemoTyped;
import styled, { keyframes } from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import center = StyledCommon.center;
import col = StyledCommon.col;
import {Link} from "react-router-dom";


function Landing() {
  return (
    <Page>
      <ContentCol>
        
        <ReactLogo />
        
        <LinkTo to='/main-screen'>
          <div>Перейти на главный экран</div>
        </LinkTo>
        
      </ContentCol>
    </Page>
  );
}
export default ReactMemoTyped(Landing)


const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  ${center};
  padding: 32px;
  background-color: #282c34;
`
const ContentCol = styled.div`
  width: fit-content;
  min-height: 100%;
  ${col};
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`
const ReactLogo = styled.img.attrs({ src: logo, alt: 'React logo' })`
  height: 20vh;
  pointer-events: none;
  animation: ${spin} infinite 20s linear;
`
const LinkTo = styled(Link)`
  color: #61dafb;
`