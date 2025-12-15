// Para que no muestre errores si ve un SVG como componente

declare module '*.svg?react' {
    import * as React from 'react'
    const Component: React.FC<React.SVGProps<SVGSVGElement>>
    export default Component
}
