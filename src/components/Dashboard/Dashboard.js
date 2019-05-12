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
      title: {
        text: "Race Data"
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
        type: "pie"
      },
      title: {
        text: "Overall US Labor Force"
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
          type: "pie"
        },
        title: {
          text: "Your Company Data"
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
      <div>
        <HighchartsReact highcharts={Highcharts} options={optionsRace} />
        <HighchartsReact highcharts={Highcharts} options={pieOptionsUsGender} />
        <HighchartsReact highcharts={Highcharts} options={pieOptionsUsSoftwareGender} />
        <HighchartsReact highcharts={Highcharts} options={yourCompanyGender} />
      </div>
    );
  }
}

export default Dashboard;
