// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameCond} = props

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {isGameCond && (
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
