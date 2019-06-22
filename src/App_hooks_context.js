import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
const CounterContext = createContext({
  counter: 0
})
const Display = () => {
 const context = useContext(CounterContext)
 console.log(context)
 // cannot resolve context - not clear what is the issue
 //return  <h1>{context.counter}</h1>
 return <h1>{context}</h1>
}
const Increment = props => <button onClick={() => props.addToCounter(1)}>Increment</button>
const Decrement = props => <button onClick={() => props.addToCounter(-1)}>Decrement</button>
const App = () => {
  const addToCounter = () => false;
  const counter = useContext(CounterContext).counter
  return (
    <CounterContext.Provider>
      <Display  />
      <Increment addToCounter={addToCounter} />
      <Decrement addToCounter={addToCounter} />
    </CounterContext.Provider>  
  )
}

export default App;
