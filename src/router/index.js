import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

import login from '../component/login/Login'
import register from '../component/register/Register'

const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route  path='/login' component={ login } />
                <Route  path='/register' component={ register } />
            </Switch>
        </Router>
    )
   
}



export default Routers