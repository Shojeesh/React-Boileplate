import styled, { css } from 'styled-components'

const Icon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${props => props.inputIcon && css`
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
    `}
    ${props => props.buttonIcon && css`
        width: 10px;
        height: 10px;
    `}
    &.right{
        right: 0;
    }
    &.left{
        left: 0;
    }
`

export default Icon