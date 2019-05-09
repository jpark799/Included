import React, { Component } from 'react'
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";


class googleGender extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            chartOptions:  {
                chart: {
                  type: 'column'
                },
                title: {
                  text: 'Stacked column chart'
                },
                xAxis: {
                  categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                },
                yAxis: {
                  min: 0,
                  title: {
                    text: 'Total fruit consumption'
                  }
                },
                tooltip: {
                  pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                  shared: true
                },
                plotOptions: {
                  column: {
                    stacking: 'percent'
                  }
                },
                series: [{
                  name: 'John',
                  data: [5, 3, 4, 7, 2]
                }, {
                  name: 'Jane',
                  data: [2, 2, 3, 2, 1]
                }, {
                  name: 'Joe',
                  data: [3, 4, 4, 2, 5]
                }]
              }}}
        //{
        //         chart: {
        //             type: 'bar'
        //         },
        //         title: {
        //             text: "Google's Race/Ethnicity Distribution"
        //         },
        //         xAxis: {
        //             categories: ['% White', '% Asian', '% Black', '% Latin', '% Native American']
        //         },
        //         yAxis: {
        //             min: 0,
        //             max: 100,
        //             title: {
        //                 text: '%'
        //             }
        //         },
        //         legend: {
        //             reversed: true
        //         },
        //         plotOptions: {
        //             series: {
        //             stacking: 'normal'
        //             }
        //         },
        //         series: [{
        //             name: 'Male',
        //             data: [38.8, 26.4, 1.9, 3.8, 0.6]
        //         }, {
        //             name: 'Female',
        //             data: [16.7, 13.3, 1.4, 2.0, 0.3]
        //         }]}
        //     };
        // }
    


    render() {
        const { chartOptions } = this.state;

        return (
            <div>
            <HighchartsReact 
                Highcharts={Highcharts} 
                options={chartOptions} />
            </div>
        )
    }
}

export default googleGender;