import * as types from '../action/types'



const initState = {
    name: '',
    password: '',
    npassword: '',
    redirecTo: '',
    message: '',
    registerSwitch: false
}

export default(state = initState, action) => {
    if(action.type === types.Register_NAME){
        const newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    } 
    if(action.type === types.Register_PWD){
        //console.log(state)
        const newState = JSON.parse(JSON.stringify(state))
        if( newState.password ===! newState.password){
            newState.message = '两次密码不一致，请检查 ！'
            return newState
        } 
        newState.password = action.value
        return newState
    }

    if(action.type === types.Register_sPWD){
        //console.log(state)
        const newState = JSON.parse(JSON.stringify(state))
        newState.npassword = action.value
        return newState
    }


    


    if(action.type === types.Register){
        const newState = JSON.parse(JSON.stringify(state))
        // axios.get('/data')
        // .then(res => {
        //     newState.name = res.data.name
        //     newState.password = res.data.password
        // })
        // newState.redirecTo = '/todolist'

        //
        if(newState.password !== newState.npassword) {
            newState.message = '两次密码不一致，请检查 ！'
        }
       

        
        console.log(newState)
      
        return newState
    }
    return state
}

//registerNameChanege, registerPwdChanege, npassword, registerPwdSChanege 
//REGISTER_NAME  Register_PWD Register_sPWD Register_Npassword