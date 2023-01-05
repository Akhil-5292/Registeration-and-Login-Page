// import logo from './logo.svg';
// import './App.css';
// import Registration from './Components/Registeration';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <div className="outer">
//         <div className="inner">
//           <Navbar/>
//           <Registration />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registeration from "./Components/Registeration"
import DemoForm from "./Components/DemoForm";


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>WELCOME TO </p>
        <h1>FunctionUp Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>WELCOME TO  </p>
        <h1>FunctionUp  About Page</h1>
      </section>
    </>
  );
};



const App = () => {
  return (
    <Switch>
      <Route exact path ="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/Registeration">
        <Registeration />
      </Route>
      {/* <Route path="/DemoForm">
        <DemoForm />
      </Route> */}
    </Switch>
  );
};

export default App;

