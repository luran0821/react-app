import * as types from '../action/types'
import axios from 'axios'


const initState = {
    name: '',
    password: '',
    isAuth: false,
    redirecTo: '',
    message: ''
}

export default(state = initState, action) => {
    if(action.type === types.Login_NAME){
        const newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    } 
    if(action.type === types.Login_PWD){
        const newState = JSON.parse(JSON.stringify(state))
        newState.password = action.value
        return newState
    }

    //登陆
    if(action.type === types.Login){
        const newState = JSON.parse(JSON.stringify(state))
        const data = {
            name: newState.name,
            password: newState.password,
        }
        axios.post('/account/login', data)
            .then((res)=> {
                if( res.status === 200 ){
                    res.data = data
                    console.log(res.data);
                }else{

                }     
                
          }) 
          .then((req)=> {
            console.log(JSON.parse(JSON.stringify(req)))
          })
          .catch(function (error) {
            console.log(error);
          });
      //  newState.redirecTo = '/todolist'
      
        return newState
    }
    return state
}