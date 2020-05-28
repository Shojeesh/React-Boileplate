import React from 'react'
import styled from 'styled-components'
import * as variables from './../../styles/variables/Variables'
import Relative from '../../ui/Relative'

const Element = styled.label`   
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`
const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${Element}{
        background: ${variables.primaryColor}
        &:after{
            content: "";
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`

const Switch = (props) => {
    return (
        <Relative>
            <CheckBox id={props.id} type="checkbox" />
            <Element {...props} />
        </Relative>
    )
}

export default Switch
