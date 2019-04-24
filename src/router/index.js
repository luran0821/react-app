import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import login from '../component/login/Login'


const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path='/login' component={ login } />
            </Switch>
        </Router>
    )
   
}



export default Routers