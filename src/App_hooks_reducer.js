import React, { createContext, useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
const CounterContext = createContext()
const CounterContextProvider = props =>{
  const initialState = {
    counter: 0
  }
  const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_TO_COUNTER': {
        return { 
          ...state, 
          counter: state.counter + action.value }
      }
      default: return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value={{state, dispatch}}>
      {props.children}
    </CounterContext.Provider>
  )
}
const Display = () => {
 const { state } = useContext(CounterContext)
 return  <h1>Counter: {state.counter}</h1>
}
const Increment = () => {
  const { dispatch } = useContext(CounterContext)
  return (
    <button 
      onClick={() => dispatch({ 
        type: 'ADD_TO_COUNTER', 
        value: 1})}>
      Increment
    </button>
  )
}
const Decrement = () => {
  const { dispatch } = useContext(CounterContext)
  return (
    <button 
      onClick={() => dispatch({ 
        type: 'ADD_TO_COUNTER', 
        value: -1})}>
      Decrement
    </button>
  )
}
const App = () => {
  return (
    <CounterContextProvider>
      <Display />
      <Increment  />
      <Decrement  />
    </CounterContextProvider>  
  )
}
export default App;