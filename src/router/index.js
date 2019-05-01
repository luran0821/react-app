import React from 'react'
import { HashRouter as Router , Switch, Route } from 'react-router-dom'

import login from '../component/login/Login'
import register from '../component/register/Register'
import panel from '../component/panel/MainPanel'
import table from '../component/Table/table'
const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route  path='/login' component={ login } />
                <Route  path='/register' component={ register } />
                <Route  path= '/' component= { panel } />
                <Route  path= '/table' component= { table } />
            </Switch>
        </Router>
    )
   
}



export default Routers