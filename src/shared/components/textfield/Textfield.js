import React from 'react'
import Icon from '../../ui/Icon'
import {Element, TextfieldBlock} from './Textfield.style'
import Label from '../../ui/Label'
import FieldHelper from '../../ui/FieldHelper'

const Textfield = (props) => {
    
        const icon = props.icon && (
            <Icon
                inputIcon
                className={props.iconPosition ? props.iconPosition : 'left'}
            >
                {props.icon}
            </Icon>
        );

        const label = props.label && (
            <Label inutLabel>
                {props.label}
            </Label>
        )

        const helper = props.helper && (
            <FieldHelper className={props.helper_class}>
                {props.helper}
            </FieldHelper>
        )

        return (
            <>
                {label}
                <TextfieldBlock className={props.field_class}>
                    {icon}
                    <Element {...props} />
                </TextfieldBlock>
                {helper}
            </>
        );
}


export default Textfield;
