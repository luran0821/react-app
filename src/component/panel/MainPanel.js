import React, {Component} from 'react';
import { connect } from 'react-redux'
import { HashRouter  as Router , Route ,Link} from 'react-router-dom'


import Menue from '../menue/Menue'
import {PanelMenu} from 'primereact/panelmenu';

import './panel.css'
import  login  from '../../component/login/Login';
import  utable  from '../../component/utable/UserTable';
import  deptable  from '../../component/deptable/DepTabel';
import educhart from '../../component/educhart/EduChart';
import salarychart from '../../component/salarychart/SalaryChart';

 class MainPanel extends Component {     
    render() {
        const items = [
            {
               label: '人员信息管理',
               icon:'pi pi-fw pi-user',
               items:[  
                  {
                     
                     label:'人员信息',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/utable'
                        
                    }
                  },
                  {
                     label:'学历信息',
                     icon:'pi pi-fw pi-user',
                     
                  }
               ]
            },
            {
               label: '部门管理',
               icon:'pi pi-fw pi-sitemap',
               items:[  
                  {
                     label:'部门信息',
                     icon:'pi pi-fw pi-users',
                     
                  },
                  {
                     label:'部门调动',
                     icon:'pi pi-fw pi-users',                     
                  },
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
                        //window.location.hash='/table'
                       
                    }
                  },
                  {
                     label:'补贴',
                     icon:'pi pi-fw pi-dollar'
                  },
                  {
                     label:'五险一金',
                     icon:'pi pi-fw pi-dollar'
                  }
         
               ]
            },
            {
               label:'考勤管理',
               icon:'pi pi-fw pi-calendar',
               items:[
                  {
                     label:'休息管理',
                     icon:'pi pi-fw pi-clock',
         
                  },
                  {
                     label:'员工考勤',
                     icon:'pi pi-fw pi-user',
         
                  },
                  {
                     label:'值班安排',
                     icon:'pi pi-fw pi-calendar-plus',
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
            }
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
                            <Route path='/login'   exact component={ login } />  
                            <Route path='/utable'  exact component={ utable } />
                            <Route path='/deptable' exact component={ deptable } />
                            <Route path='/educhart'  exact component={ educhart } />
                            <Route path='/salarychart' exact component={ salarychart } />        
                        </Router>
                       
                       </div>
                       <div className='bottom-panel clear'>Copyright © 2019  All Rights Reserved</div>
                </div>        
            </div>            
        ) 
    }
                          
}


export default connect(null, null)(MainPanel)