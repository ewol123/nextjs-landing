import {
    Responsive,
} from 'semantic-ui-react'

export default function getWidth(): number {
    const isSSR = typeof window === 'undefined'

    return isSSR ? parseInt(Responsive.onlyTablet.minWidth.toString()) : window.innerWidth
}

