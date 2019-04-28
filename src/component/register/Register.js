import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../action/actionCreators' 

import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';

import {Button} from 'primereact/button'; 


import './register.css'




const Register = (props) => {

    const { name, password, registerNameChanege, registerPwdChanege, npassword, registerPwdSChanege, onClickregister ,message} = props

    return(
        <div>
                <div className = 'register' >
                 {/* <div>
                    <input value= { name }
                           onChange={ loginNameChanege }
                    />
                 </div>
                 <div>
                    <input value= { password }
                           onChange= { loginPwdChanege }
                    />
                 </div>
                 <div>
                    <button name='login'
                            onClick= { onClickLogin }
                    > login 
                   { redirecTo ? <Redirect to = { redirecTo } /> : null}
                    </button>
                    <button name='register' > register </button>
                 </div>
                 <div>
                 <button 

                            >login</button></div>
                 <div><button
                            
                            >logout</button></div> */}


                 <div className='register-name'>           
                    
                        <InputText  
                            placeholder='用户名'
                            size = '45'
                            value= { name }
                           onChange={ registerNameChanege}
                        />
                   
                </div>
                
                <div className= 'register-password'>
                    <Password  
                                placeholder='密码'
                                size = '45'
                                value= { password }
                            onChange={ registerPwdChanege}
                            />
                </div>

                <div>{ message }</div>

                <div  className='register-npassword'>
                    <Password  
                                placeholder='密码确认'
                                size = '45'
                                value= { npassword }
                            onChange={ registerPwdSChanege}
                            />
                </div>
                

                <div>{ message }</div>
                {/* <div>{ password !== npassword ? '两次密码不一致，请检查 ！': null }</div> */}

                <div className='register-button'>

                    <Button 
                        className="p-button-info register-regin-button" label="注册" 
                        onClick={ onClickregister }
                        />
                    <Button  
                        className="p-button-info  register-login-button" label="登陆" 

                        />
                </div>


         





            </div>
        </div>
    )
}





const mapStateToProps = (state) => ({
    name: state.register.name,
    password: state.register.password,
    isAuth: state.register.npassword,
    redirecTo:  state.register.redirecTo,
    message:  state.register.message
})


const mapDispatchToProps = (dispatch) =>({
    registerNameChanege(e){
        dispatch(actionCreators.registerNameChanege(e))
    },
    registerPwdChanege(e){
        dispatch(actionCreators.registerPwdChanege(e))
    },
    registerPwdSChanege(e){
        dispatch(actionCreators.registerPwdSChanege(e))
    },


    onClickregister(){
        dispatch(actionCreators.onClickregister())
    } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)