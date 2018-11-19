import React from 'react'
import { getUser } from '../../infra/local-storage'

const Home = () => {
    return <div>Hello Home</div>
}

class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        if(getUser().email){
            return
        }
    }
}
export default Home

