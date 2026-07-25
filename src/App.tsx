import { useReducer } from "react"
import {stateReducer, initialState} from "./hook/CountHook"

export default function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addTwo = () => dispatch({type: "setCount", value: state.count + 2});
  const reset = () => dispatch({ type: "reset"});

  return (
    <div>

      <h1 className="font-bold text-3xl align-middle text-center">Counter</h1>

      <p className="text-2xl mt-3 text-center">Count: {state.count}</p>

      <button className="btn btn-accent" onClick={addTwo}>+2</button>

      <button className="btn btn-error" onClick={reset}>reset</button>

    </div>
  )
}