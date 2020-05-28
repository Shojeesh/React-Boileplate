import React from 'react'
import {Element} from './Button.style'
import Icon from '../../ui/Icon'
import Loader from '../../ui/Loader'

const Button = (props) => {
    const icon = props.icon && <Icon buttonIcon>{props.icon}</Icon>
    const loader = props.loader && <Loader />
    return (
        <Element {...props}>
            {icon} <span className="buttonText">{props.text}</span> {loader}
        </Element>
    )
}


export default Button
