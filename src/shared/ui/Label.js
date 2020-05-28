import styled, { css } from "styled-components"

const Label = styled.label`
    ${props => props.inutLabel && css`
        width: 100%;
        display: block;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
    `}
    ${props => props.checkbox && css`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
    `}
    ${props => props.radio && css`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
    `}
`

export default Label