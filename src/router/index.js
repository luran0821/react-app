import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

import login from '../component/login/Login'
import register from '../component/register/Register'
import panel from '../component/panel/MainPanel'
const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route  path='/login' component={ login } />
                <Route  path='/register' component={ register } />
                <Route  path= '/panel' component= { panel } />
            </Switch>
        </Router>
    )
   
}



export default Routers