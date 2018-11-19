import api from '../infra/api-config'

export function loginUser(user){
    const url = '/users/login' //this data was assigned by the backend

    const data = {
        login: user.email,
        password: user.password
    }

return api().post(url,data)

}