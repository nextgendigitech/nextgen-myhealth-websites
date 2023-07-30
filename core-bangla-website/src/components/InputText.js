import styled from "styled-components";

import { P2, P3 } from "./Typography";
import colors from "../config/colors";

const Input = styled.input`
    font-size: 1rem;
    border-radius: 3px;
    width: 100%;
    height: 2em;
    background-color: white;
    border: 1px solid ${colors.grey};
    color: ${colors.darkGrey};
    ::placeholder {
        color: ${colors.lessDarkGrey};
    }
    :focus {
        outline: 1px solid ${colors.blue};
    }
`

const Textarea = styled.textarea`
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    background-color: white;
    border: 1px solid ${colors.grey};
    color: ${colors.darkGrey};
    resize: none;
    ::placeholder {
        color: ${colors.grey};
    }
    :focus {
        outline: 1px solid ${colors.blue};
    }
`

export const InputText = ({ label, type, value, onChange, onKeyDown, helpText,
                            placeholder, size='md', autoFocus=false, disabled=false, style, className, list }) => {
    return (
        <div style={style} className={className}>
            <P2>{label}</P2>
            <Input
                list={list}
                type={type || 'text'}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                style={{ outline: helpText && `1px solid ${colors.red}` }}
                className='p-1'
                placeholder={placeholder}
                autoFocus={autoFocus}
                disabled={disabled}
            />
            {helpText && <P2 color='second'>{helpText}</P2>}
        </div>
    )
}

export const InputTextarea = ({ label, value, onChange, helpText, placeholder, autoFocus=false, rows=4, style, className }) => {
    return (
        <div style={style} className={className}>
            <P2>{label}</P2>
            <Textarea
                value={value}
                onChange={onChange}
                style={{ outline: helpText && `1px solid ${colors.red}` }}
                className='p-1'
                placeholder={placeholder}
                autoFocus={autoFocus}
                rows={rows}
            />
            {helpText && <P2 color='second'>{helpText}</P2>}
        </div>
    )
}