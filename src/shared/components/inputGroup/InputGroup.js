import React from 'react'
import styled, {css} from 'styled-components'
import Textfield from '../textfield/Textfield'
import Button from '../button/Button'

const Group = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'}
    position: relative;
    ${props => props.leftIcon && css`
        flex-direction: row-reverse;
    `}
    a, button, input[type='button']{
        border-radius: 0;
    }
`


const InputGroup = (props) => {
    return (
        <Group {...props}>
            <Textfield />
            <Button {...props} />
        </Group>
    );
}

export default InputGroup;
