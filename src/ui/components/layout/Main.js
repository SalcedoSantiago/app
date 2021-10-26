
import { useState } from 'react'


const Main = () => {

    const [count, setCount] = useState(0)


    return (
        <main className="container">

            <div className="counter">
                <p>{count}</p>
                <div className="counter-actions">
                    <button className="btn btn-danger" onClick={() => { setCount(count - 1) }}>-</button>
                    <button className="btn btn-success" onClick={() => { setCount(count + 1) }}>+</button>
                </div>
            </div>


        </main>
    )
}
export default Main;