// import logo from './logo.svg';
// import './App.css';
import Start from "./Start"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"
import Step8 from "./Step8"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Router> */}
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Start />
          {/* </Route> */}
          {/* <Route> */}
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
            <Step5 />
            <Step6 />
            <Step7 />
            <Step8 />
          {/* </Route> */}
          {/* <Route exact path="/next">
            <Signup />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
