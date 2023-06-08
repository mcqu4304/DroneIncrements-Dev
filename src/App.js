import './Styling/App.css';
import drone from "./Images/droneIcon.svg";
import NavBar from "./Components/NavBar";
import IncrementTable from './Components/IncrementTable';

function App() {
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
      <div className='align-table'>
        <div style={{paddingBottom: 50}}>
        <h3>Problem</h3>
        <p>I want to fly RC aircraft (Unmanned aircraft system) I don't know what I need, what's available, and in my budget.</p>
        <h3>Solution</h3>
        <p> Drone Increments, a  shared collection of parts and builds. Helping all of us understand different ways we can reach our own fun flight goals!</p>
        </div>
      <h2 style={{paddingBottom: 10}}>Recommended Builds</h2>
      <IncrementTable></IncrementTable>
      </div>
      <div>
            <p style={{position: "relative", bottom: 0, width:"100%", textAlign: "center"}}> Icons from <a className ="App-link" href="https://www.svgrepo.com/svg/170240/drone" title="Flaticon"> https://www.svgrepo.com</a>
            </p>
      </div>
    </div>
  );
}

export default App;
