import React from "react"


export namespace ReactUtils {
  
  export const ReactMemoTyped = <C>(Component: C): C => {
    // @ts-ignore
    return React.memo(Component)
  }

}