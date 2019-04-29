import React, {Component} from 'react';
import { connect } from 'react-redux'


import Menue from '../Menue/Menue'

import './panel.css'
export class MainPanel extends Component {
        
   

    render() {
        return (
            <div>
                <Menue />
                <div className='main-panel'>
                       <div className='left-panel'>left</div>
                       <div className='right-panel'>right</div>
                       <div className='bottom-panel clear'>bottom</div>
                </div>        
            </div>
            
            
                
            
        ) 
    }
                          
}


export default connect(null, null)(MainPanel)