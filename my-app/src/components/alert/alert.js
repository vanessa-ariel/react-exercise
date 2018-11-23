import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import './alert.css'

const Alert = (props) => {
    return(
        <Dialog open={props.open}>
            <DialogTitle className='alert__title'>{props.children}</DialogTitle>
            <Button onClick={props.handleOnClick}>Ok</Button>
        </Dialog>    
        )
}

export default Alert