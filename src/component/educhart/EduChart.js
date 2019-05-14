import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import { connect } from 'react-redux';

 class EduChart extends Component {

    render() {
        const data = {
            labels: ['专科','本科','本科以上'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };

        return (
            <div>
                <div className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}


export default  connect()(EduChart)