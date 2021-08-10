import ReactDOM from 'react-dom'
import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={100}/>, divRoot)