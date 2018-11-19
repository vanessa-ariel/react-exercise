import axios from 'axios'

const config = {
    baseURL: 'https://lehtodoapi.herokuapp.com/',
    timeout: 5000, //after this interval if API do not respond a message is displayed 
}

function api(){
    config.headers = {
        user: ''
    }
    return axios.create(config)
}

export function startServer(){
    const url = '/ping'

    return api().get(url) //to make a request
}

startServer()

export default api
