import React, { Component } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Form from '../Form'



class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    const options = {
        title: {
            text: 'Race Data'
        },
        subtitle: {
            text: 'Source: US Burea of Labor'
        },
        xAxis: {
            categories: ['White', 'Black', 'Asian', 'Hispanic/Latin']
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: this.props.series
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
  }
}

export default Dashboard;