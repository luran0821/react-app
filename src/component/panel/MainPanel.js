import React, {Component} from 'react';
import { connect } from 'react-redux'


import {Accordion,AccordionTab} from 'primereact/accordion';


export class MainPanel extends Component {
        
    constructor() {
        super();
        this.state = {
            columns: [0, 1, 2, 3, 4, 5]
        };
        
        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
    }

    addColumn() {
        this.setState({
            columns: [...this.state.columns, this.state.columns.length]
        });
    }

    removeColumn() {
        let cols = [...this.state.columns];
        cols.splice(-1, 1);
        this.setState({
            columns: cols
        });
    }


render(){
    return(
        <Accordion activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>
    
    )
}

}
export default connect(null, null)(MainPanel)