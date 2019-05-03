import React from 'react';
import { BrowserRouter  as Router , Switch, Route } from 'react-router-dom';

import login from '../component/login/Login';
import register from '../component/register/Register';
import panel from '../component/panel/MainPanel';
// import userTable from '../component/utable/UserTable';
// import depTabel from '../component/deptable/DepTabel';
// import educhart from '../component/educhart/EduChart';
// import salarychart from '../component/salarychart/SalaryChart';
const Routers = () =>{
    return(
        <Router>
            <Switch>
                <Route  path='/login' exact component={ login } />
                <Route  path='/register' exact component={ register } />
                <Route  path= '/' exact component= { panel } />
                {/* <Route  path= '/utable' exact component= { userTable } />
                <Route  path= '/deptabel' exact component= { depTabel } />
                <Route  path= '/salarychart' exact component= { salarychart } />
                <Route  path= '/educhart' exact component= { educhart } /> */}
            </Switch>
        </Router>
    )
   
}



export default Routers