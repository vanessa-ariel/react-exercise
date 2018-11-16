import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Components/Form/Button', module)
    .add('default', () =>(
       <Button>Children Here</Button> //without props disabled returns false by default
    ))
    .add('disabled', () =>(
        <Button disabled>Children Here</Button> //with props disabled returns true by default
    ))

