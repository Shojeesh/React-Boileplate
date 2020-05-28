import React, { Component } from 'react'
import styled from 'styled-components'
import * as variables from './../../styles/variables/Variables'
import Label from '../../ui/Label'

const Element = styled.span`
    position: absolute;
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    border: solid 1px #ddd;
    display: inline-block;
`
const HiddenInput = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 2px;
    width: 20px;
    height: 20px;
    &:checked + ${Element}{
        &:after{
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${variables.primaryColor};
            top: calc(50% - 5px);
            left: calc(50% - 5px);
        }
    }
`
const RadioLabel = styled.span`
    margin-left: 5px;
`

class Radio extends Component {
    render() {
        const label = this.props.text && <RadioLabel>{this.props.text}</RadioLabel>
        return (
            <Label radio htmlFor={this.props.for}>
                <HiddenInput id={this.props.id} type="radio" />
                <Element />
                {label}
            </Label>
        )
    }
}

export default Radio