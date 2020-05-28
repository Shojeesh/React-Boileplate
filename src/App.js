import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import theme from './Themes.js'
import Fieldset from './shared/ui/Fieldset'
import Label from './shared/ui/Label'
import Textfield from './shared/components/textfield/Textfield'
import InputGroup from './shared/components/inputGroup/InputGroup'
import Select from './shared/components/select/Select'
import Button from './shared/components/button/Button'
import Checkbox from './shared/components/checkbox/Checkbox'
import Radio from './shared/components/radio/Radio'
import Switch from './shared/components/switch/Switch'


const Icon = styled.div`
    width: 10px;
    height: 10px;
    background: #ddd;
`

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fieldset>
                    <Textfield
                        label='Normal'
                        type='text'
                        placeholder='Name'
                        helper='*Mandatory'
                    />
                </Fieldset>

                <Fieldset>
                    <Textfield
                        label='Left Icon'
                        type='email'
                        placeholder='Email'
                        className='hasLeftIcon'
                        icon={<Icon />}
                        helper='Something Good'
                        helper_class='isSuccess'
                    />
                </Fieldset>

                <Fieldset>
                    <Textfield
                        label='Right Icon'
                        type='password'
                        placeholder='Password'
                        className='hasRightIcon'
                        icon={<Icon />}
                        iconPosition='right'
                        helper='Error'
                        helper_class='isDanger'
                    />
                </Fieldset>

                <Fieldset>
                    <Label inputField></Label>
                    <InputGroup
                        type='text'
                        placeholder='Username'
                        text='Search'
                        buttonClass='asInputGroup'
                    />
                </Fieldset>

                <Fieldset>
                    <Select options={['Normal', 'Easy']} />
                </Fieldset>

                <Fieldset>
                    <Button text="Default" />
                </Fieldset>

                <Fieldset>
                    <Button primary text="Primary" />
                </Fieldset>

                <Fieldset>
                    <Button inverted primary text="Inverted" />
                </Fieldset>

                <Fieldset>
                    <Button primary disabled text="Disabled" />
                </Fieldset>

                <Fieldset>
                    <Button primary loader text="Normal" className="isLoading" />
                </Fieldset>

                <Fieldset>
                    <Button primary loader icon={<Icon />} text="Left Icon" />
                </Fieldset>

                <Fieldset>
                    <Button primary className="hasRightIcon" icon={<Icon />} text="Right Icon" />
                </Fieldset>

                <Fieldset>
                    <Checkbox id='cbx1' htmlFor='cbx1' label='Label' />
                </Fieldset>

                <Fieldset>
                    <Radio id='rd1' htmlFor='rd1' text='Label' />
                </Fieldset>
                <Fieldset>
                    <Switch id='swt1' htmlFor='swt1' />
                </Fieldset>
            </ThemeProvider>
        )
    }
}

export default App