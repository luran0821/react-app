import React, {Component} from 'react';
import { connect } from 'react-redux'


import Menue from '../Menue/Menue'
import {PanelMenu} from 'primereact/panelmenu';

import './panel.css'
 class MainPanel extends Component {     
    render() {
        const items = [
            {
               label: '人员信息管理',
               icon:'pi pi-fw pi-bookmark',
               items:[  
                  {
                     label:'人员信息',
                     icon:'pi pi-fw pi-user'
                  },
                  {
                     label:'学历信息',
                     icon:'pi pi-fw pi-user'
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
                <div className='main-panel'>
                       <div className='left-panel'>
                          <PanelMenu model={items} style={{width: '100%'}}/>
                       </div>
                       <div className='right-panel'>right</div>
                       <div className='bottom-panel clear'>bottom</div>
                </div>        
            </div>
            
            
                
            
        ) 
    }
                          
}


export default connect(null, null)(MainPanel)