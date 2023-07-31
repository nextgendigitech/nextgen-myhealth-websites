import styled from "styled-components";

import colors from "../config/colors";

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
    font-size: 1.8rem;
`

export const H2 = styled.h2`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 1.6rem;
`

export const H3 = styled.h3`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 1.4rem;
`

export const H4 = styled.h4`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 1.2rem;
`

export const H5 = styled.h5`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: bold;
    font-size: 1rem;
`

export const H6 = styled.h6`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: bold;
    font-size: 0.8rem;
`

export const P1 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 1.2rem;
`

export const P2 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 1rem;
`

export const P3 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 0.8rem;
`

export const P4 = styled.p`
    color: ${props => colorProps[props.color || 'default']};
    display: ${props => displayProps[props.display || 'block']};
    text-align: ${props => alignProps[props.align || 'left']};
    font-weight: normal;
    font-size: 0.6rem;
`
