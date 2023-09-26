import styled from "styled-components";

import colors from "../config/colors";
import responsive from "../config/responsive";

const colorProps = {
    first: colors.darkBlue,
    second: colors.darkRed,
    third: colors.darkGreen,
    fourth: colors.darkPurple,
    default: colors.darkGrey,
    black: 'black',
    white: 'white',
};

const displayProps = {
    block: 'block',
    inline: 'inline',
}

const alignProps = {
    left: 'left',
    right: 'right',
    center: 'center',
    justify: 'justify',
}

/*
<H1 color='default' display='block' align='left'>Text<H1>

Props:
    color = ['first', 'second', 'third', 'default', 'white', 'black']
    display = ['block', 'inline']
    align = ['left', 'right', 'center', 'justify']
*/

export const H1 = styled.h1`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 3.5rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 2.5rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 2.75rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 3rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 3.25rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 3.5rem;
    }
`

export const H2 = styled.h2`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 2.5rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 1.5rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 1.75rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 2rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 2.25rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 2.5rem;
    }
`

export const H3 = styled.h3`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 2rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 1rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 1.25rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 1.5rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1.75rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 2rem;
    }
`

export const H4 = styled.h4`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 1.8rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 1rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 1.2rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 1.4rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1.6rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 1.8rem;
    }
`

export const H5 = styled.h5`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: bold;
    /* font-size: 1.6rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 0.8rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 1rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 1.2rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1.4rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 1.6rem;
    }
`

export const H6 = styled.h6`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: bold;
    /* font-size: 1.4rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 0.8rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 1rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 1.2rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1.4rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 1.4rem;
    }
`

export const P1 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 1.5rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 0.9rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 1rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 1.2rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1.3rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 1.5rem;
    }
`

export const P2 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 1.2rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 0.9rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 0.9rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 0.9rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1.2rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 1.2rem;
    }
`

export const P3 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 1rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 0.8rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 0.8rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 0.8rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 1rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 1rem;
    }
`

export const P4 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    /* font-size: 0.8rem; */

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        font-size: 0.7rem;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        font-size: 0.7rem;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        font-size: 0.7rem;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        font-size: 0.8rem;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        font-size: 0.8rem;
    }
`
