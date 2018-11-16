import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

class Menu extends React.Component{
    constructor(){
        super()
        this.state = { menuPosition: false} 
    }
    handleOpenOrClose = () => {
        this.setState({ menuPosition : !this.state.menuPosition})
    }
    
    render(){
        let menuButtonClasses = 'menu__button'
        let menuOptionsClasses = 'menu__options'

        if(this.state.menuPosition){
            menuButtonClasses += ' menu__button--open'
            menuOptionsClasses += ' menu__options--open'
        }
        return(
            <div>
                <a className={menuButtonClasses} onClick={this.handleOpenOrClose}> {/* used a tag instead of link because this link does not redirect to another page */}
                    Menu
                </a>
                <ul className={menuOptionsClasses} onClick={this.handleOpenOrClose}>
                    <li>
                        <Link to='/quem-somos'> Quem Somos </Link>
                    </li>
                    <li>
                        <Link to='/contato'> Contato </Link>
                    </li>
                    <li>
                        <Link to='/login'> Login </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu