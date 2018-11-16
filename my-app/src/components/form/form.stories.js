import React from 'react'
import { storiesOf } from '@storybook/react'
import Form from './index'

storiesOf('Components/Form', module)
    .add('default', () => (
        <Form title ='Title here' text ='Text Here'>
            <Form.Label> Name </Form.Label>
            <Form.Input type='text'/>
        </Form>
    ))