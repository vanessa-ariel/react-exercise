import React from 'react'
import Form from '../form'

import './postit.css'

class Postit extends React.Component{
    constructor(props){
        super(props)   
        this.state = {
            editing : false,
            id: 0,
            title: '',
            text: ''
        }
    }
    handlePostitClick = () =>{
        this.setState({
            editing : true
        })
    }
    handlePostitRemove = () =>{
        
    }
    handlePostitSubmit = (e) =>{
        e.preventDefault()
        const postit = {
            title: this.state.title,
            text: this.state.text
        }
    }
    setTitle = (e) =>{
        const inputTitle = e.target.value
        this.setState({
            title : inputTitle
        })
    }
    setText = (event) => {
        const inputText = e.target.value
        this.setState({
            text : inputText
        })
    }
    render(){
        return(
            <div onClick={this.handlePostitClick} className='postit'>
            {/* DUVIDA DE COMO ACESSA JSON */}
                <Form onSubmit={this.handlePostitSubmit}>
                    {this.state.editing && (
                        <button onClick={this.handlePostitRemove} className='postit__button-remove'>
                            x
                        </button>
                    )                       
                    }

                    <input 
                        type='text' 
                        className='postit__title' 
                        placeholder='Título'
                    />
                    <textarea
                        className='postit__text'
                        placeholder='Digite o texto...'
                        name='text'
                        value='this.state.value'
                    />
                    {this.state.editing && (
                        <button className='postit__button-completed'>
                            Concluído
                        </button>
                    )
                    }
                </Form>
            </div>
        )
    }
    componentDidMount(){
        this.user
    }    
}

export default Postit
