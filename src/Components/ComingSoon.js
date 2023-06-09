import React from 'react';
import drone from "../Images/droneIcon.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/App.css';

import NavBar from "./NavBar";

function ComingSoon() {
  return (
    <div className="App">
        <div className='align-logo'>       
          <h1>
          <img
          alt=""
          src={drone}
          width="50"
          height="50"
          className="d-inline-block"
          />{' '}
            Drone Increments</h1>
        </div>
      <NavBar></NavBar>
      <header className="App-header">
        <img src={drone} className="App-logo" alt="logo" />
        <div style={{paddingTop: "20px"}}>
          Coming Soon!
        </div>
      </header>
      <div><p style={{position: "relative", bottom: 0, width:"100%", textAlign: "center"}}> Icons from <a className ="App-link" href="https://www.svgrepo.com/svg/170240/drone" title="Flaticon"> https://www.svgrepo.com</a>
            </p></div>
    </div>
  );
}

export default ComingSoon;