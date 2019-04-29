import React, {Component} from 'react';
import {Button} from 'primereact/button';
import {Menubar} from 'primereact/menubar';
import { connect } from 'react-redux';

import './menue.css'

 class Menue extends Component {

    constructor() {
        super();

       
    }
    render() {
        return (
            <div>
                <div className='menue-left'> 人力资源管理系统</div>
                <div className='menue-right'>
                    <Menubar className='menue'>
                        <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
                    </Menubar>
                
                </div>
            </div>

            
        );
    }
}


export default connect()(Menue)




                        
