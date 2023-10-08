import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {result: 1, tails: 0, heads: 0}

  toggleCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const Result = tossResult
      ? this.setState(prevState => ({heads: prevState.heads + 1}))
      : this.setState(prevState => ({tails: prevState.tails + 1}))
    this.setState({result: tossResult})
  }

  render() {
    const {result, tails, heads} = this.state
    const tossImage = result
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    console.log(tossImage)
    return (
      <div className="container">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-info">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="toss-result" />
          <button type="button" className="toss-btn" onClick={this.toggleCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="toss-count">Total: {tails + heads}</p>
            <p className="toss-count">Heads: {heads}</p>
            <p className="toss-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
