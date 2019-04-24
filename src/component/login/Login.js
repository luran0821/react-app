import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionCreators from '../../action/actionCreators' 

import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';

import {Button} from 'primereact/button'; 

import './login.css'

const Login = (props) => {
        const { name, password, loginNameChanege, loginPwdChanege, onClickLogin, redirecTo } = props
        return(
            <div className = 'loginbox' >
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


                 <div>           
                    <span className='p-float-label input-name'>
                        <InputText  
                            placeholder='用户名'
                            size = '30'
                            value= { name }
                           onChange={ loginNameChanege}
                        />
                    </span>
                </div>
                
                <div>
                    <Password  
                    className='input-password'
                    promptLabel= '输入密码'
                    weakLabel = '密码太短'
                    mediumLabel = '密码长度一般'
                    strongLabel = '密码长度适合'
                    size = '30'

                    placeholder='密码'
                    value= { password }
                    onChange= { loginPwdChanege }

                    />    
                </div>
                <div>
                    <Button className="p-button-info regin-button" label="注册" />
                    <Button  className="p-button-info  login-button" label="登陆" />
                </div>


         





            </div>
        )

}

const mapStateToProps = (state) => ({
    name: state.login.name,
    password: state.login.password,
    isAuth: state.login.isAuth,
    redirecTo: state.login.redirecTo  
})


const mapDispatchToProps = (dispatch) =>({
    loginNameChanege(e){
        dispatch(actionCreators.loginNameChanege(e))
    },
    loginPwdChanege(e){
        dispatch(actionCreators.loginPwdChanege(e))
    },
    onClickLogin(){
        dispatch(actionCreators.onClickLogin())
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)