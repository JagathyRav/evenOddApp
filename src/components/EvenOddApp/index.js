// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevCount => ({
      count: prevCount.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    const countType = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="cardContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="type">Count is {countType}</p>
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="descp">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
