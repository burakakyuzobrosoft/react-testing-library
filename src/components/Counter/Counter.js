import { Fragment, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <Fragment>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        </Fragment>
    )
}

export default Counter