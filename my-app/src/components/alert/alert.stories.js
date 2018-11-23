import React from 'react'
import { storiesOf } from '@storybook/react'
import Alert from './index'

storiesOf('Components/Alert', module)
    .add('default', () =>(
        <Alert open={true}>Email e senha não cadastrados</Alert>
    ))