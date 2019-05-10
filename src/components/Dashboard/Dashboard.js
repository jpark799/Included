import React, { Component } from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Form from '../Form'


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
    series: [{
        name: 'US Workforce',
        data: [78,12.3,6.3,17.3]
    },
    {
        name: 'US Software Engineers',
        data: [58.6, 3.8, 35.4, 5.3]
    },
    {
        name: 'Your Company',
        // need to pass in companyRace here.
        data: []
    }]
}
class Dashboard extends Component {
constructor(props) {
    super(props);
}
  render() {
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