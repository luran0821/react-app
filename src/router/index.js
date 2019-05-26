import React from 'react';
import { BrowserRouter  as Router , Switch, Route } from 'react-router-dom';

import login from '../component/login/Login';
import register from '../component/register/Register';
import panel from '../component/panel/MainPanel';

const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route  path='/login' exact component={ login } />
                <Route  path='/register' exact component={ register } />
                <Route  path= '/' exact component= { panel } />
            </Switch>
        </Router>
    )
   
}



export default Routers