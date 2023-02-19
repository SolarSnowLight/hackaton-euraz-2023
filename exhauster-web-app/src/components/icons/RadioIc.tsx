import { ReactComponent as SvgComponent } from 'src/res/icon/radio.svg'
import React from 'react'
import {ReactUtils} from "src/utils/react-utils";
import ReactMemoTyped = ReactUtils.ReactMemoTyped;


type SvgProps = React.SVGProps<SVGSVGElement> & { title?: string }
type CustomSvgProps = {
    mainColor?: string|undefined
    size?: number|string|undefined
}
export type SvgIconProps = CustomSvgProps & SvgProps


const RadioIc = ({ mainColor = 'black', size, ...props }: SvgIconProps) => {
    const { style, ...restProps } = props
    return <SvgComponent
        style={{
            width: size, height: size,
            maxWidth: '100%', maxHeight: '100%',
            fill: mainColor, stroke: mainColor,
            ...style
        }}
        {...restProps}
    />
}
export default ReactMemoTyped(RadioIc)