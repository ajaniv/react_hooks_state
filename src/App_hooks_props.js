/*
 * react hooks using props
 */
import React, { Fragment} from 'react';
 
const Display = props => <h1>Counter value : {props.counter}</h1>;
const Increment = props => (  
  <button onClick={() => props.addToCounter(1)}>Increment</button>
); 
const Decrement = props => (  
  <button onClick={() => props.addToCounter(-1)}>Decrement</button>
); 
const App = () => {  
  const [counter, setCounter] = React.useState(0);  
  const addToCounter = value => setCounter(counter + value);  
  return (    
    <Fragment>      
      <h1>Test</h1>      
      <Display counter={counter} />      
      <Increment addToCounter={addToCounter} />      
      <Decrement addToCounter={addToCounter} />    
    </Fragment>  
  );
}; 
//ReactDOM.render(<App />, document.querySelector("#app"));
export default App;
/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/