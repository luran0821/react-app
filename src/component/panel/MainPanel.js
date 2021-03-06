import React, {Component} from 'react';
import { connect } from 'react-redux'
import { HashRouter  as Router , Route } from 'react-router-dom'


import Menue from '../menue/Menue'
import {PanelMenu} from 'primereact/panelmenu';

import './panel.css'
import  utable  from '../../component/utable/UserTable';
import  deptable  from '../../component/deptable/DepTabel';
import educhart from '../../component/educhart/EduChart';
import salarychart from '../../component/salarychart/SalaryChart';
import account from '../../component/account/Account'
import education from '../../component/education/Education'
import salary from '../../component/salary/Salary'
import subsidy from '../../component/subsidy/Subsidy'
import socialsecurity from '../../component/socialsecurity/Socialsecurity'
import leave from '../../component/leave/Leave'
import attendance from '../../component/attendance/Attendance'
 class MainPanel extends Component {     
    render() {
        const items = [
            {
               label: '人员信息',
               icon:'pi pi-fw pi-user',
               items:[  
                  {
                     
                     label:'员工管理',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/utable'
                        
                    }
                  },
                  {
                     label:'学历管理',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/education'
                        
                    }
                  }
               ]
            },
            {
               label: '部门信息',
               icon:'pi pi-fw pi-sitemap',
               items:[  
                  {
                     label:'添加部门',
                     icon:'pi pi-fw pi-users', 
                     command: (event) => {
                        window.location.hash='/deptable'
                       
                    }                    
                  }
               ]
            },



            {
               label:'薪资管理',
               icon:'pi pi-fw pi-dollar',
               items:[
                  {
                     label:'工资',
                     icon:'pi pi-fw pi-dollar',
                     command: (event) => {
                        window.location.hash='/salary'
                       
                    }
                     
                  },
                  {
                     label:'补贴',
                     icon:'pi pi-fw pi-dollar',
                     command: (event) => {
                        window.location.hash='/subsidy'
                       
                    }
                  },
                  {
                     label:'五险一金',
                     icon:'pi pi-fw pi-dollar',
                     command: (event) => {
                       window.location.hash='/socialsecurity'
                       
                    }
                  }
         
               ]
            },
            {
               label:'考勤管理',
               icon:'pi pi-fw pi-calendar',
               items:[
                  {
                     label:'请假管理',
                     icon:'pi pi-fw pi-clock',
                     command: (event) => {
                        window.location.hash='/leave'
                        
                     }
         
                  },
                  {
                     label:'员工考勤',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/attendance'
                        
                     }
         
                  }
               ]
            },
            {
               label:'数据分析',
               icon:'pi pi-fw pi-chart-bar',
               items:[
                  {
                     label:'员工学历统计',
                     icon:'pi pi-fw pi-pencil',
                     command: (event) => {
                        window.location.hash='/educhart'
                         
                      }
                  },
                  {
                     label:'员工薪资分布',
                     icon:'pi pi-fw pi-money-bill',
                     command: (event) => {
                         window.location.hash='/salarychart'
                         
                      }
                  }
               ]
            },
            {
               label: '账号信息',
               icon:'pi pi-fw pi-users',
               items:[  
                  {
                     
                     label:'账号管理',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/account'
                        
                    }
                  }
               ]
            },
         ]
        return (
            
            <div>
                <Menue />
                <div className='clear' style={{width: '100%', height: 1}}></div> 
                <div className='main-panel'>
                       <div className='left-panel'>
                          <PanelMenu  model={items} style={{width: '100%'}}
                              
                          />
                       </div>
                       <div className='right-panel'>
                        <Router>                                                                     
                            <Route path='/'  exact component={ utable } />
                            <Route path='/utable'  exact component={ utable } />
                            <Route path='/deptable' exact component={ deptable } />
                            <Route path='/educhart'  exact component={ educhart } />
                            <Route path='/salarychart' exact component={ salarychart } />
                            <Route path='/account' exact component={ account } />  
                            <Route path='/education' exact component={ education } />      
                            <Route path='/salary' exact component={ salary } />  
                            <Route path='/subsidy' exact component={ subsidy } /> 
                            <Route path='/socialsecurity' exact component={ socialsecurity } /> 
                            <Route path='/leave' exact component={ leave } /> 
                            <Route path='/attendance' exact component={ attendance } /> 
                        </Router>
                       
                       </div>
                       <div className='bottom-panel clear'>Copyright © 2019  All Rights Reserved</div>
                </div>        
            </div>            
        ) 
    }
                          
}


export default connect(null, null)(MainPanel)