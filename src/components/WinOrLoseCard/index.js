// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWonLoss, score, playGameAgain} = props
  const WonLossImage = isWonLoss
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const WonLossText = isWonLoss ? 'You Won' : 'You Lose'
  const WonLossScore = isWonLoss ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <img src={WonLossImage} alt="win or lose" className="win-lose-image" />
      <div className="result-container">
        <h1 className="win-lose-heading">{WonLossText}</h1>
        <p className="win-lose-score">{WonLossScore}</p>
        <p className="score-result">{score}/12</p>
        <button className="play-btn" type="button" onClick={playGameAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
