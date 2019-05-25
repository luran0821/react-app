import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import { connect } from 'react-redux';

class SalaryChart extends Component {
    
    render() {
        const data = {
            labels: ['2000-2500', '2500-3000', '3000-4000', '4000-5000', '5000-8000', '8000-10000', '10000+'],
            datasets: [
                {
                    label: '男职工人数',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: '女职工人数',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]    
        };   
        return (
            <div>
                <div className="content-section implementation">
                    <Chart type="bar" data={data} width= "100%"/>
                </div>
            </div>
        )
    }
}


export default  connect()(SalaryChart)