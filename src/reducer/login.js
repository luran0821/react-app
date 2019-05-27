import * as types from '../action/types'
import axios from 'axios'


const initState = {
    name: '',
    password: '',
    isAuth: false,
    redirecTo: '',
    message: '',
    login: false,
    code:''
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
        if(state.code === 1) newState.login = true
        return newState
    }

    if(action.type === types.Register){
        const newState = JSON.parse(JSON.stringify(state))

        return newState
    }


    if(action.type === types.loginChange){
        const newState = JSON.parse(JSON.stringify(state))
        const data = {
            name: newState.name,
            password: newState.password,
        }
        console.log(data)
     axios.post('/account/login', data)
         .then((res)=> {
                if( res.status === 200 && res.data.code === 1 ){
                    //res.data = data
                    newState.code = res.data.code
                   // newState.login = res.data.login
                    console.log(res.data.code);
                    return newState
                }    
                
          }) 
          .catch(function (error) {
            console.log(error);
          });

        return newState
    }



    return state
}


