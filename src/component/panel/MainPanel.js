import React, {Component} from 'react';
import { connect } from 'react-redux'
import { HashRouter  as Router , Route ,Link} from 'react-router-dom'


import Menue from '../menue/Menue'
import {PanelMenu} from 'primereact/panelmenu';

import './panel.css'
import  login  from '../../component/login/Login';
import  table  from '../../component/Table/table';
 class MainPanel extends Component {     
    render() {


        var linkvalue = "/login"
        const items = [
            {
               label: '人员信息管理',
               icon:'pi pi-fw pi-bookmark',
               items:[  
                  {
                     
                     label:'人员信息',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                       // window.location.hash='/login'
                        console.log(linkvalue)
                    }
                  },
                  {
                     label:'学历信息',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        //window.location.hash='/table'
                        console.log(linkvalue)
                    }
                  }
               ]
            },
            {
               label: '部门管理',
               icon:'pi pi-fw pi-bookmark',
               items:[  
                  {
                     label:'部门信息',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/table'
                        console.log(linkvalue)
                    }
                  },
                  {
                     label:'部门调动',
                     icon:'pi pi-fw pi-user',                     
                  },
                  {
                     label:'添加部门',
                     icon:'pi pi-fw pi-user',                     
                  }
               ]
            },



            {
               label:'薪资管理',
               icon:'pi pi-fw pi-bookmark',
               items:[
                  {
                     label:'基本工资',
                     icon:'pi pi-fw pi-align-left',
                     command: (event) => {
                        window.location.hash='/table'
                        console.log(linkvalue)
                    }
                  },
                  {
                     label:'补贴',
                     icon:'pi pi-fw pi-align-right'
                  },
                  {
                     label:'五险一金',
                     icon:'pi pi-fw pi-align-center'
                  }
         
               ]
            },
            {
               label:'考勤管理',
               icon:'pi pi-fw pi-bookmark',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-user-plus',
         
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-user-minus',
         
                  },
                  {
                     label:'Search',
                     icon:'pi pi-fw pi-users',
                  }
               ]
            },
            {
               label:'数据分析',
               icon:'pi pi-fw pi-bookmark',
               items:[
                  {
                     label:'在职员工学历统计',
                     icon:'pi pi-fw pi-pencil'
                  },
                  {
                     label:'在职员工薪资分布',
                     icon:'pi pi-fw pi-calendar-times'
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
                        
                           
                            <Route path="/login" exact component={login} />  
                            <Route path="/table" exact component={table} />       
                        </Router>
                       
                       </div>
                       <div className='bottom-panel clear'>Copyright © 2019  All Rights Reserved</div>
                </div>        
            </div>
            
            
                
            
        ) 
    }
                          
}


export default connect(null, null)(MainPanel)