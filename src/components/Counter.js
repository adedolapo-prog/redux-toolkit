import { useSelector, useDispatch } from "react-redux"
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice"

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

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
    </section>
  )
}

export default Counter
