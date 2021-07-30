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
  import Navbar from "./Navebar"
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

  function App() {
    return (
      
      <Router> 
        <Navbar />
      <div className="App">
        <Switch> 
        <Route exact path="/">
            <Start />
        </Route> 
        <Route path="/step1">
          <Step1 />
        </Route>
        <Route path="/step2">
            <Step2 />
        </Route>
        <Route  path="/step3">
            <Step3 />
        </Route>
        <Route  path="/step4">
            <Step4 />
        </Route>
        <Route path="/step5">
            <Step5 />
        </Route>
        <Route  path="/step6">
            <Step6 />
        </Route>
        <Route  path="/step7">
            <Step7 />
        </Route>
        <Route  path="/step8">
            <Step8 />
        </Route>
        </Switch>
        </div>
  </Router>
    )
     
      
  }

  export default App;
