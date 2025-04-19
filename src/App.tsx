import {useState} from 'react'
import './App.css'
import {Button} from 'sat-ui'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Button className={'text-red-500'} onClick={() => setCount(count + 1)}>counter: {count}</Button>
        </div>
    )
}

export default App
