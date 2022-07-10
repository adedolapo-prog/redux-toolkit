import { useSelector, useDispatch } from "react-redux"
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice"
import { useState } from "react"

const Counter = (props) => {
  const [initialEntry, setInitialEntry] = useState(0)
  const entry = Number(initialEntry) || 0
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const resetAllHandler = (e) => {
    setInitialEntry(0)
    dispatch(reset())
  }

  const incrementHandler = (e) => {
    dispatch(increment())
  }

  const decrementHandler = (e) => {
    dispatch(decrement())
  }

  const resetHandler = (e) => {
    dispatch(reset())
  }

  const increaseHandler = (e) => {
    dispatch(incrementByAmount({ plus: 5 }))
  }

  const decreaseHandler = (e) => {
    dispatch(incrementByAmount({ minus: 5 }))
  }

  const addValuehandler = (e) => {
    dispatch(incrementByAmount({ plus: entry }))
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decreaseHandler}>-5</button>
        <button onClick={decrementHandler}>-</button>
      </div>

      <input
        type="text"
        value={entry}
        onChange={(e) => setInitialEntry(e.target.value)}
      />
      <div>
        <button onClick={addValuehandler}>Add Value</button>
        <button onClick={resetAllHandler}>Reset All</button>
      </div>
    </section>
  )
}

export default Counter
