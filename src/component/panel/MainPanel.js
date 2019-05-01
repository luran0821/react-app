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
                        window.location.hash='/login'
                        console.log(linkvalue)
                    }
                  },
                  {
                     label:'学历信息',
                     icon:'pi pi-fw pi-user',
                     command: (event) => {
                        window.location.hash='/table'
                        console.log(linkvalue)
                    }
                  }
               ]
            },
            {
               label:'薪资管理',
               icon:'pi pi-fw pi-bookmark',
               items:[
                  {
                     label:'基本工资',
                     icon:'pi pi-fw pi-align-left'
                  },
                  {
                     label:'补贴',
                     icon:'pi pi-fw pi-align-right'
                  },
                  {
                     label:'五险一金',
                     icon:'pi pi-fw pi-align-center'
                  },
                  {
                     label:'Justify',
                     icon:'pi pi-fw pi-align-justify'
                  },
         
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
                     items:[
                        {
                           label:'Filter',
                           icon:'pi pi-fw pi-filter',
                           items:[
                              {
                                 label:'Print',
                                 icon:'pi pi-fw pi-print'
                              }
                           ]
                        },
                        {
                           icon:'pi pi-fw pi-bars',
                           label:'List'
                        }
                     ]
                  }
               ]
            },
            {
               label:'数据分析',
               icon:'pi pi-fw pi-bookmark',
               items:[
                  {
                     label:'Edit',
                     icon:'pi pi-fw pi-pencil',
                     items:[
                        {
                           label:'Save',
                           icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                           label:'Delete',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  },
                  {
                     label:'Archieve',
                     icon:'pi pi-fw pi-calendar-times',
                     items:[
                        {
                           label:'Remove',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
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