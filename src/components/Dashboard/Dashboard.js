import React, { Component } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Form from "../Form";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const optionsRace = {
      chart: {
        backgroundColor: '#87BCDE'},
      height: '50%',
      title: {
        text: "Racial Demographics"
      },
      subtitle: {
        text: "Source: US Burea of Labor"
      },
      xAxis: {
        categories: ["White", "Black", "Asian", "Hispanic/Latin"]
      },
      yAxis: {
        title: {
          text: "Percent"
        }
      },
      tooltip: {
        valueSuffix: "%"
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
        borderWidth: 0
      },
      series: this.props.series
    };

    const pieOptionsUsGender = {
      chart: {
        backgroundColor: '#87BCDE',

        type: "pie",
      },
      opacity: 0.1,
      title: {
        text: "Overall US Labor Force"
      },
      backgroundColor: "#87BCDE" ,
      subtitle: {
        text: "Source: US Burea of Labor"
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
        borderWidth: 0
      },
      tooltip: {
        valueSuffix: "%"
      },
      series: [
        {
          name: "US Labor Force",
          keys: ["name", "y", "color", "label"],
          data: [
            ["Male", 53.1, "#0000FF", "Male"],
            ["Female", 46.9, "#EB001F", "Female"]
          ],
          dataLabels: {
            enabled: true,
            format: "{point.label}"
          }
        }
      ]
    };

    const pieOptionsUsSoftwareGender = {
        chart: {
          backgroundColor: '#87BCDE',

          type: "pie"
        },
        title: {
          text: "US Software Engineers"
        },
  
        subtitle: {
          text: "Source: US Burea of Labor"
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 0
        },
        tooltip: {
          valueSuffix: "%"
        },
        series: [
          {
            name: "US Labor Force",
            keys: ["name", "y", "color", "label"],
            data: [
              ["Male", 80.7, "#0000FF", "Male"],
              ["Female", 19.3, "#EB001F", "Female"]
            ],
            dataLabels: {
              enabled: true,
              format: "{point.label}"
            }
          }
        ]
      };
    const yourCompanyGender = {
        chart: {
          backgroundColor: '#87BCDE',
          type: "pie"
        },
        title: {
          text: "Your Company Data"
        },
  
        subtitle: {
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 0
        },
        tooltip: {
          valueSuffix: "%"
        },
        series: [
          {
            name: "US Labor Force",
            keys: ["name", "y", "color", "label"],
            data: this.props.pieData
            ,
            dataLabels: {
              enabled: true,
              format: "{point.label}"
            }
          }
        ]
      };
      console.log('This is pieData props in Dash ',this.props.pieData)
      console.log('This is companydata race series ', yourCompanyGender.series.data)

    return (
      <div
    style={{ backgroundColor: "#87BCDE" }}
>

        <HighchartsReact highcharts={Highcharts} options={optionsRace} />
        <div style={{backgroundColor: "#transparent", opacity: 100, height: '100px', width: '33%',
          float: 'left'}}> 
        <HighchartsReact highcharts={Highcharts} options={pieOptionsUsGender} />         </div>
        <div style={{ float: 'left'}}> 

        <HighchartsReact highcharts={Highcharts} options={pieOptionsUsSoftwareGender} /></div>
        <div style={{ float: 'left'}}> 
        <HighchartsReact highcharts={Highcharts} options={yourCompanyGender} />  </div>      <br/>
        <br/>
        <br/>
        <div style={{ float: 'left',}}> 
        <form method="get" action="/">
    <button style={{  width: '80px', height: '40px'}}  type="submit">Reset</button>
</form>        <br/> </div>
        <br/> 
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Dashboard;
