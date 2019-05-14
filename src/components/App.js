import React, { Component } from "react";
import "../App.css";
import googleGender from "./GoogleGender";
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

// const Main = () => (
//   <main>
//     <Switch>
//       <Route exact path='/' component={Form } render/>
//       <Route path='/Dashboard' component={Dashboard}/>
//     </Switch>
//   </main>
// )
// const formComponent =  <Form setSeries={this.setSeries} setPieData={this.setPieData} />

// const App = () => (
//   <div>
//     <Main/>
//   </div>
// )

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "US Workforce",
          color: 'red',
          data: [78, 12.3, 6.3, 17.3]
        },
        {
          name: "US Software Engineers",
          color: 'black',
          data: [58.6, 3.8, 35.4, 5.3]
        },
        {
          name: "Your Company",
          color: 'green',
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

  // onSubmit = fields => {
  //   console.log("App Component received: ", fields);
  //   let whiteTotal = parseInt(fields.whiteM)+parseInt(fields.whiteF)
  //   let blackTotal = parseInt(fields.blackM)+parseInt(fields.blackF)
  //   let asianTotal = parseInt(fields.asianM)+parseInt(fields.asianF)
  //   let hispanicLatinTotal = parseInt(fields.hispanicLatinM)+parseInt(fields.hispanicLatinF)
  //   let companyRace = [whiteTotal, blackTotal, asianTotal, hispanicLatinTotal]
  //   console.log(companyRace)
  // };

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
            data: this.props.pieData
            ,
            dataLabels: {
              enabled: true,
              format: "{point.label}"
            }
          }
        ]
      };

      // FIN





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

            {/* <Parallax.Layer
              offset={5}
              speed={1}
              style={{ backgroundColor: "#87BCDE" }}
            /> */}

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
              <img src={url("earth")} style={{ width: "15%" }} />
            </Parallax.Layer>

   

            <Parallax.Layer
              offset={4}
              speed={-0.3}
              style={{
                backgroundSize: "30.5%",
                backgroundPosition: "center",
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
                <h1>Inclusive</h1> <br />
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
                According to the consulting group, Mckinsey.... <br />
                Companies that were in the top quartile for gender <br />
                diversity were 15% more likely to have financial returns <br />
                that were above their national industry medians. <br /> <br />
                Companies that were in the top quartile for racial <br />
                diversity were 35% more likely to have financial returns <br />
                that were above their national industry medians.
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
                <h1>Better Decision Making & Innovation</h1> <br />
                <br />
                A diversity of informed views enables objections and <br />
                alternatives to be explored more efficiently. <br />
                Solutions are able to emerge more readily <br />
                and are adopted with greater confidence. <br /> <br />
                According to Scott E. Page, a professor of economics at <br />
                the University of Michigan, the presence of women <br />
                and minorities on leadership teams is strongly correlated <br />
                with stronger financial performance
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
                Less than 20% of Fortune 500 companies <br />
                publish annual diversity reports <br />
                while 78% of the US work force list Diversity  <br />
                & Inclusion as important to them. <br /> <br />
                Data serves as an important catalyst <br />
                for change and progress while also providing <br />
                greater insight into hiring, progression, <br />
                and retention within organizations.
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

            {/* <Parallax.Layer
              offset={5}
              speed={-0}
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center"
              // }}
              // Reset Scroll
              // onClick={() => this.parallax.scrollTo(0)}
            >
              {/* <Route
                path="/dash"
                render={() => (
                  <Dashboard
                    series={this.state.series}
                    pieData={this.state.pieData}
                  />
                )} */}

                    </Parallax>

        </Switch>
      </BrowserRouter>
          //{" "}
          // <div className="App">
          //   // <Form setSeries={this.setSeries} setPieData={this.setPieData} />
          //   // <Dashboard series={this.state.series} />
          //   // {/* <PieChart data={this.state.pieData} /> */}
          //   //{" "}
          // </div>
          
    );
  }
}

export default App;
