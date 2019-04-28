import * as types from '../action/types'
import axios from 'axios'


const initState = {
    name: '',
    password: '',
    isAuth: false,
    redirecTo: ''
}

export default(state = initState, action) => {
    if(action.type === types.Login_NAME){
        const newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    } 
    if(action.type === types.Login_PWD){
        console.log(state)
        const newState = JSON.parse(JSON.stringify(state))
        newState.password = action.value
        return newState
    }
    if(action.type === types.Login){
        const newState = JSON.parse(JSON.stringify(state))
        axios.get('/data')
        .then(res => {
            newState.name = res.data.name
            newState.password = res.data.password
        })
        newState.redirecTo = '/todolist'
      
        return newState
    }
    return state
}