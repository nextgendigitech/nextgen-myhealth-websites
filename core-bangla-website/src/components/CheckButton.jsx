import styled from 'styled-components';

import { P1, P2, P3, H5, H6 } from './Typography';
import { HBox, VBox } from "./Containers";
import colors from "../config/colors";

const sizeProps = {
    xs: {
        height: '17px',
        borderRadius: '9px',
        padding: '0px 0.5em 0px',
    },
    sm: {
        height: '25px',
        borderRadius: '13px',
        padding: '0px 0.5em 0px',
    },
    md: {
        height: '30px',
        borderRadius: '15px',
        padding: '0px 0.5em 0px',
    },
    lg: {
        height: '40px',
        borderRadius: '20px',
        padding: '0px 0.5em 0px',
    },
};

const Button = styled.button`
    height: ${props => sizeProps[props.size || 'md'].height};
    color: ${props => props.checked ? "white" : colors.darkGrey};
    background-color: ${props => props.checked ? colors.blue : "white"};
    border: 1px solid ${colors.grey};
    padding: ${props => sizeProps[props.size || 'md'].padding};
    font-size: ${props => sizeProps[props.size || 'md'].fontSize};
    cursor: pointer;
`

const Left = styled(Button)`
    border-radius: ${props => sizeProps[props.size || 'md'].borderRadius} 0px 0px ${props => sizeProps[props.size || 'md'].borderRadius};
    border-right: none;
`

const Middle = styled(Button)`
    border-radius: 0px;
    border-right: none;
`

const Right = styled(Button)`
    border-radius: 0px ${props => sizeProps[props.size || 'md'].borderRadius} ${props => sizeProps[props.size || 'md'].borderRadius} 0px;
`

const CheckButton = ({ items, setItems, className, size="sm", radio=true }) => {
    const handleClick = (index) => {
        if (radio) {
            var values = [...items];
            for (var i=0; i<values.length; i++) {
                 values[i].checked = false;
            }
            values[index].checked = true;
            
            setItems(values);
        }
        else {
            var values = [...items];
            values[index].checked = !values[index].checked;
            
            setItems(values);
        }
    }

    return (
        <HBox className={className}>
            {
                items.map((item, index) => (
                    (() => {
                        if (index === 0) {
                            return <Left
                                        size={size}
                                        checked={item.checked}
                                        onClick={() => handleClick(index)}
                                    >
                                        <P3>{item.text}</P3>
                                    </Left>
                        }
                        else if (index === items.length-1) {
                            return <Right
                                        size={size}
                                        checked={item.checked}
                                        onClick={() => handleClick(index)}
                                    >
                                        <P3>{item.text}</P3>
                                    </Right>
                        }
                        else {
                            return <Middle
                                        size={size}
                                        checked={item.checked}
                                        onClick={() => handleClick(index)}
                                    >
                                        <P3>{item.text}</P3>
                                    </Middle>
                        }
                    })()
                ))
            }
        </HBox>
    )
}

export default CheckButton;