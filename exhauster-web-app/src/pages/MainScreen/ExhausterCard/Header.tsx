import Arrow1Right from "src/components/icons/Arrow1Right";
import styled, {keyframes} from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import {Link} from "react-router-dom";




export namespace Header {
  
  import row = StyledCommon.row
  import resetButton = StyledCommon.resetButton
  import center = StyledCommon.center
  
  type HeaderProps = {
    isWorking: boolean
    name: string
    id: string
  }
  export function Header(props: HeaderProps){
    return <Frame>
      { props.isWorking && <IndicatorGreen/> }
      { !props.isWorking && <IndicatorRed/> }
      <Title>{props.name}</Title>
      <Link to={`/exhauster-detailed/${props.id}`}>
        <Button><Arrow/></Button>
      </Link>
    </Frame>
  }
  
  const Frame = styled.div`
    width: 100%;
    min-height: 40px;
    background: #6E6E6D;
    ${row};
    padding: 8px;
    gap: 10px;
    align-items: center;
  `
  
  const IndicatorGreen = styled.div`
    height: 26px;
    aspect-ratio: 1;
    background: #6EA566;
    border-radius: 4px;
  `
  /*const IndicatorYellow = styled(IndicatorGreen)`
    background: #F9A823;
  `*/
  const blinking = keyframes`
    0% { opacity: 1 }
    50% { opacity: 0.2 }
    100% { opacity: 1 }
  `
  const IndicatorRed = styled(IndicatorGreen)`
    background: #E32112;
    //animation: ${blinking} infinite 1.5s linear;
  `
  
  const Title = styled.div`
    flex: 1;
    font: 500 15px/129% Roboto;
    color: white;
  `
  
  const Button = styled.button`
    ${resetButton};
    ${center};
    width: 26px;
    aspect-ratio: 1;
    background: #FAFAFA;
    border: 1px solid #EAEAEA;
    border-radius: 4px;
    cursor: pointer;
    &:hover, &:active, &:focus-visible, &:focus {
      border: 1px solid #EAEAEA;
    }
  `
  const Arrow = styled(Arrow1Right).attrs({
    mainColor: '#B1B1B2',
    height: 9.5,
  })``
}