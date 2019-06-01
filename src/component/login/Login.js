import React,{Component}from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../action/actionCreators' 

import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';

import {Button} from 'primereact/button'; 

import './login.css'
import { Redirect  } from 'react-router-dom';
import { withRouter} from 'react-router'

class Login extends  Component {
       
    componentWillReceiveProps(){
        this.props.loginChange()
    }
    render(){

        const { name, password, loginNameChanege, loginPwdChanege ,onClickLogin ,login} = this.props

       

        return(
            
           
            <div  className = 'login-background'>
               {login? <Redirect to= '/' /> : null}
                <div className = 'loginbox' >                
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
                        <Button className="p-button-info regin-button" label="注册" 
                            //onClick= { onClicRegister.bind(this)}
                            onClick = {
                                (e) => {
                                    this.props.history.push('/register')
                                }
                            }
                        />
                        <Button  className="p-button-info  login-button" label="登陆" 
                            onClick= { onClickLogin.bind(this) }                                              
                        />
                       
                    </div>
                </div>
             </div>
        
        )
      }
    }



const mapStateToProps = (state) => ({
    name: state.login.name,
    password: state.login.password,
    login: state.login.login,
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
    },
    onClicRegister(){
        dispatch(actionCreators.onClicRegister())
    },
    loginChange(){
        dispatch(actionCreators.loginChange())
    }
    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))