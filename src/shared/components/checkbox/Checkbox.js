import React, { Component } from "react"
import styled from "styled-components"
import * as variables from './../../styles/variables/Variables'
import Label from '../../ui/Label'

const Element = styled.span`
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 2px;
    background: transparent;
    cursor: pointer;
    border: solid 1px #ddd;
`
const HiddenInput = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 2px;
    width: 20px;
    height: 20px;
    &:checked + ${Element}{
        background: ${variables.primaryColor};
        border: solid 1px ${variables.primaryColor};
        &::after{
            content: "";
            position: absolute;
            width: 12px;
            height: 6px;
            border: solid 2px #fff;
            transition: 0.2s;
            border-top: 0;
            border-right: 0;
            transform: rotate(-45deg);
            top: 4px;
            left: 3px;
        }
    }
`

const CheckboxLabel = styled.span`
    margin-left: 5px;
`

class Switch extends Component {
    render() {
        const label = this.props.label && <CheckboxLabel>{this.props.label}</CheckboxLabel>
        return (
            <Label checkbox htmlFor={this.props.htmlFor}>
                <HiddenInput id={this.props.id} type="checkbox" />
                <Element />
                {label}
            </Label>
        )
    }
}

export default Switch