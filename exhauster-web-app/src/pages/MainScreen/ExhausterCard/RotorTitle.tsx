import ThreeDotsIc from "../../../components/icons/ThreeDotsIc";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import center = StyledCommon.center;
import row = StyledCommon.row;



export namespace RotorTitle {
  export type RotorTitleProps = {
    name: string
    replacementDate: string
  }
  export function RotorTitle(props: RotorTitleProps){
    return <RotorTitle_>
      <TitleFrame><Title>{props.name}</Title></TitleFrame>
      <Date>{props.replacementDate}</Date>
      <ThreeDotsBox>
        <ThreeDots />
      </ThreeDotsBox>
    </RotorTitle_>
  }
  const RotorTitle_ = styled.div`
    ${row};
    align-items: center;
    gap: 10px;
  `
  const Title = styled.h4`
    font: 500 15px/129% Roboto;
    color: #2B2B2A;
  `
  const TitleFrame = styled.div`
    flex: 1;
  `
  const Date = styled.div`
    width: fit-content;
    font: 400 13px/129% Roboto;
    color: black;
    padding: 4px 10px;
    background: #F4F4F4;
    border-radius: 4px;
  `
  const ThreeDotsBox = styled.div`
    width: 30px;
    height: 30px;
    margin: -7px 0;
    border-radius: 50%;
    background: none;
    ${center};
    transition: background-color 0.3s linear;
    cursor: pointer;
    &:hover {
      background: #F4F4F4;
    }
  `
  const ThreeDots = styled(ThreeDotsIc).attrs({ mainColor: 'black', height: 18 })`
  `
}