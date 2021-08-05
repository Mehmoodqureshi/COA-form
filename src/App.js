import Start from "./Start";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Navbar from "./Navebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
const defaultState = {
  userInfo: {},
  move: "",
  moveType: "",
  businessName: "",
  Address2: "",
  Address5: "",
  Address8: "",
  unitNumber2: "",
  unitNumber5: "",
  phoneNumber: "",
  email: "",
  cardDetails: {},
  forwardMailStartDate: "",
  secondDate: false,
  forwardMailEndDate: "",
  // ltLngNew: "",
  // currentAddressStreet: "",
  // lat_long: "",
};
export default class Form extends Component {
  state = defaultState;

  handleChangeField = (e = {}, name, value) => {
    this.setState(
      {
        [name]: value,
      },
      console.log(this.state)
    );
  };

  handleChangeState = (newState) => {
    this.setState(newState, console.log(this.state));
  };

  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Start
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step1">
              <Step1
                handleChangeField={this.handleChangeField.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step2">
              <Step2
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step3">
              <Step3
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step4">
              <Step4
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step5">
              <Step5
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step6">
              <Step6
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step7">
              <Step7
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
            <Route path="/step8">
              <Step8
                onChangeState={this.handleChangeState.bind(this)}
                state={this.state}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
// import Map from "./Map"

// const App = () => {
//   return ( 
//     <div>
//       <Map />
//     </div>
//    );
// }
 
// export default App;