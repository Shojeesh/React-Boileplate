import styled, {css} from 'styled-components'
import * as variables from './../../styles/variables/Variables'
import Icon from '../../ui/Icon'
import Loader from '../../ui/Loader'

export const Element = styled.a`
    min-width: ${props => props.minWidth || '100px'};
    height: 40px;
    background: ${variables.defaultColor};
    color: #000;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.borderRadius || '2px'};
    font-size: ${props => props.fontSize || '14px'};
    font-weight: ${props => props.fontWeight || 'normal'}
    cursor: pointer;
    border: solid 1px ${variables.defaultColor};
    transition: all 0.2s;
    position: relative;
    user-select: none;
    ${props => props.primary && css`
        background: ${variables.primaryColor};
        border: solid 1px ${variables.primaryColor};
        color: #fff;
    `}
    ${props => props.inverted && css`
        background: transparent;
        color: #000;
        border-color: #dbdbdb;
    `}
    ${props => props.disabled && css`
        background: transparent;
        cursor: not-allowed;
        opacity: 0.45;
    `}
    
    ${props => props.primary & props.inverted && css`
        background: transparent;
        border: solid 1px ${variables.primaryColor};
        color: ${variables.primaryColor};
    `}
    &:hover{
        outline: 0;
    }
    .buttonText{
        margin: 0 5px;
    }
    &.hasRightIcon{
        flex-direction: row-reverse;
    }
    &.isLoading{
        color: transparent;
        pointer-events: none;
        ${Loader}{
            opacity: 1;
        }
        ${Icon}{
            opacity: 0;
        }
    }
`
