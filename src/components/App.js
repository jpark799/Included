import React, { Component } from "react";
import "../App.css";
import Test from "./Test";
import Form from "./Form";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Parallax from "react-springy-parallax";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}build/assets/${name}.svg${wrap ? ")" : ""}`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "US Workforce",
          color: "red",
          data: [78, 12.3, 6.3, 17.3]
        },
        {
          name: "US Software Engineers",
          color: "black",
          data: [58.6, 3.8, 35.4, 5.3]
        },
        {
          name: "Your Company",
          color: "green",
          // need to pass in companyRace here.
          data: []
        }
      ],
      // state for pie chart
      pieData: []
    };
  }
  // should be in Dashboard??

  setSeries = companyRaceData => {
    //copy state
    const stateCopy = { ...this.state };
    // mutate stateCopy

    console.log("This is race data", companyRaceData);

    stateCopy.series[2].data = companyRaceData;
    // update app state

    this.setState(stateCopy);
  };

  // define method to pass to Form to update App pieData
  setPieData = companyGenderData => {
    //copy state
    const stateCopy = { ...this.state };
    // mutate stateCopy

    console.log("This is gender data", companyGenderData);

    // update app state

    stateCopy.pieData = companyGenderData;
    this.setState(stateCopy);
  };

  render() {
    // START
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
          data: this.props.pieData,
          dataLabels: {
            enabled: true,
            format: "{point.label}"
          }
        }
      ]
    };

    return (
      <BrowserRouter>
        <Switch>
          <Parallax
            ref={ref => (this.parallax = ref)}
            pages={5}
            scrolling={false}
          >
            <Parallax.Layer
              offset={1}
              speed={1}
              style={{ backgroundColor: "#243B4A" }}
            />
            <Parallax.Layer
              offset={2}
              speed={1}
              style={{ backgroundColor: "#805E73" }}
            />
            <Parallax.Layer
              offset={3}
              speed={1}
              style={{ backgroundColor: "#fab8af" }}
            />

            <Parallax.Layer
              offset={4}
              speed={1}
              style={{ backgroundColor: "#87BCDE" }}
            />

            <Parallax.Layer
              offset={0}
              speed={0}
              factor={4}
              style={{
                backgroundImage: url("stars", true),
                backgroundSize: "cover"
              }}
            />

            <Parallax.Layer
              offset={1.3}
              speed={-0.3}
              style={{ pointerEvents: "none" }}
            >
              <img
                src={url("satellite4")}
                style={{ width: "15%", marginLeft: "70%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "55%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "10%", marginLeft: "15%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "70%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "40%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "10%", marginLeft: "10%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "75%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "60%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "25%", marginLeft: "30%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "10%", marginLeft: "80%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "10%", marginLeft: "10%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "75%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "60%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "25%", marginLeft: "30%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "10%", marginLeft: "80%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer offset={4.3} speed={0.4} style={{ opacity: 0.6 }}>
              <img
                src={url("cloud")}
                style={{ display: "block", width: "20%", marginLeft: "5%" }}
              />
              <img
                src={url("cloud")}
                style={{ display: "block", width: "15%", marginLeft: "75%" }}
              />
            </Parallax.Layer>

            <Parallax.Layer
              offset={4.5}
              speed={-0.4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none"
              }}
            >
              <img src={url("earth")} style={{ width: "10%" }} />
            </Parallax.Layer>

            <Parallax.Layer
              offset={4}
              speed={-0.3}
              style={{
                backgroundSize: "30.5%",
                backgroundPosition: "center"
                // backgroundImage: url("clients-main", true)
              }}
            />

            <Parallax.Layer
              offset={0}
              speed={0.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => this.parallax.scrollTo(1)}
            >
              <div
                style={{
                  whiteSpace: "pre",
                  fontFamily: "Menlo-Regular, Menlo, monospace",
                  fontSize: 60,
                  lineHeight: "68px",
                  color: "white"
                }}
              >
                <h1>Included</h1> <br />
                Because Diversity & Inclusion <br />
                Are More Than Just Buzzwords
                <br />
                <br />
                <div
                  style={{
                    fontSize: 30,
                    color: "white"
                  }}
                >
                  Jason Park
                </div>
              </div>
            </Parallax.Layer>

            <Parallax.Layer
              offset={1}
              speed={0}
              onClick={() => this.parallax.scrollTo(2)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* <img
                        src={url('server')}
                        style={{ width: '20%', transform: [{ scale: this.animation }] }}
                    /> */}

              <div
                style={{
                  whiteSpace: "pre",
                  fontFamily: "Menlo-Regular, Menlo, monospace",
                  fontSize: 27,
                  lineHeight: "38px",
                  color: "white"
                }}
              >
                <h1>The Numbers Don't Lie</h1> <br />
                <br />
                A diversity of informed views enables objections and <br />
                alternatives to be explored more efficiently. <br />
                Solutions are able to emerge more readily <br />
                and are adopted with greater confidence. <br />
                <br />
                Companies that were in the top quartile for gender <br />
                diversity were 15% more likely to have financial returns <br />
                that were above their national industry medians and <br />
                companies that were in the top quartile for racial <br />
                diversity were 35% more likely. <br />
                <i>Source: Diversity Matters (2015) - McKinsey & Company</i>
                <br />
              </div>
            </Parallax.Layer>

            <Parallax.Layer
              offset={2}
              speed={0}
              onClick={() => this.parallax.scrollTo(3)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  whiteSpace: "pre",
                  fontFamily: "Menlo-Regular, Menlo, monospace",
                  fontSize: 27,
                  lineHeight: "38px",
                  color: "white"
                }}
              >
                <h1>Diversity Drives Innovation</h1> <br />
                <br />
                Roughly half of the world's population is female <br />
                while over 80% of US software engineers are male. <br /> <br />
                As technology continues to play an increasingly <br />
                integral role in our daily lives, it's more <br />
                important than ever to ensure that the demographics <br />
                of the tech industry reflect the demographics of <br />
                society so that they can accurately build for
                <br />
                the needs of society. <br /> <br />
                Imagine all of the great ideas and innovations we <br />
                could be missing out on because of a lack of <br />
                representation.
              </div>
              {/* <HighchartsReact highcharts={Highcharts} options={pieOptionsUsGender} /> */}
            </Parallax.Layer>

            <Parallax.Layer
              offset={3}
              speed={0}
              onClick={() => this.parallax.scrollTo(4)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* <img
                        src={url('bash')}
                        style={{ width: '40%', transform: [{ scale: this.animation }] }}
                    /> */}
              <div
                style={{
                  whiteSpace: "pre",
                  fontFamily: "Menlo-Regular, Menlo, monospace",
                  fontSize: 27,
                  lineHeight: "38px",
                  color: "white"
                }}
              >
                <h1>Transparent Data Powers Progress</h1> <br />
                <br />
                Data serves as an important catalyst <br />
                for change and progress while also providing <br />
                greater insight into hiring, progression, <br />
                and retention within organizations. <br /> <br />
                Less than 20% of Fortune 500 companies <br />
                publish annual diversity reports <br />
                while 78% of the US work force list Diversity <br />
                & Inclusion as extremely important. <br /> <br />
              </div>
            </Parallax.Layer>

            <Parallax.Layer
              offset={4}
              speed={-0}

              // Reset Scroll
              // onClick={() => this.parallax.scrollTo(5)}
            >
              <Route
                exact
                path="/"
                render={routeProps => (
                  <Form
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    setSeries={this.setSeries}
                    setPieData={this.setPieData}
                    routeProps={routeProps}
                  />
                )}
              />

              <Route
                offset={5}
                path="/dash"
                render={() => (
                  <Dashboard
                    series={this.state.series}
                    pieData={this.state.pieData}
                  />
                )}
              />
            </Parallax.Layer>
          </Parallax>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
