import styled from 'styled-components';

import colors from "../config/colors";

const colorProps = {
    first: {
        color: 'white',
        hoverColor: 'white',
        background: colors.blue,
        hoverBackgrouond: colors.darkBlue,
        hoverBGOutlined: colors.veryLightBlue,
        borderColorOutlined: colors.blue,
    },
    second: {
        color: 'white',
        hoverColor: 'white',
        background: colors.red,
        hoverBackgrouond: colors.darkRed,
        hoverBGOutlined: colors.veryLightRed,
        borderColorOutlined: colors.red,
    },
    third: {
        color: 'white',
        hoverColor: 'white',
        background: colors.green,
        hoverBackgrouond: colors.darkGreen,
        hoverBGOutlined: colors.veryLightGreen,
        borderColorOutlined: colors.green,
    },
    default: {
        color: colors.darkGrey,
        hoverColor: 'white',
        background: colors.grey,
        hoverBackgrouond: colors.darkGrey,
        hoverBGOutlined: colors.lightGrey,
        borderColorOutlined: colors.grey,
    },
};

const sizeProps = {
    xs: {
        height: '20px',
        borderRadius: '10px',
        padding: '0px 1.5em 0px',
        fontSize: '0.8rem',
    },
    sm: {
        height: '30px',
        borderRadius: '15px',
        padding: '0px 1.5em 0px',
        fontSize: '1rem',
    },
    md: {
        height: '40px',
        borderRadius: '20px',
        padding: '0px 1.5em 0px',
        fontSize: '1.2rem',
    },
    lg: {
        height: '50px',
        borderRadius: '25px',
        padding: '0px 1.5em 0px',
        fontSize: '1.3rem',
    },
};

/*
<Button color='default' size='md' outlined elevated>Text</Button>

Props:
    color = ['first', 'second', 'third', 'default']
    size = ['xs', 'xm', 'md', 'lg']
    outlined = [true, false]
    elevated = [true, false]
*/
export const Button = styled.button`
    height: ${props => sizeProps[props.size || 'md'].height};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${props => props.outlined ? '1px solid' : '0px'};
    border-color: ${props => colorProps[props.color || 'default'].borderColorOutlined};
    border-radius: ${props => sizeProps[props.size || 'md'].borderRadius};
    padding: ${props => sizeProps[props.size || 'md'].padding};
    background-color: ${props => props.outlined ? 'white' : colorProps[props.color || 'default'].background};
    color: ${props => props.outlined ? colorProps[props.color || 'default'].hoverBackgrouond : colorProps[props.color || 'default'].color};
    font-size: ${props => sizeProps[props.size || 'md'].fontSize};
    cursor: pointer;
    box-shadow: ${props => props.elevated && `0px 2px 3px ${colors.shadow}`};

    &:hover {
        background-color: ${props => props.outlined ? colorProps[props.color || 'default'].hoverBGOutlined : colorProps[props.color || 'default'].hoverBackgrouond};
        color: ${props => props.outlined ? colorProps[props.color || 'default'].hoverBackgrouond : colorProps[props.color || 'default'].hoverColor};
        box-shadow: ${props => props.elevated && `0px 3px 5px ${colors.shadow}`};
    };
`

export const IconButton = styled.button`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.lightGrey};
    color: ${colors.darkGrey};
    border: 1px solid ${colors.grey};
    border-radius: 15px;
    cursor: pointer;

    :hover {
        background-color: ${colors.darkGrey};
        color: white;
    }
`