/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    newEmojisList: [],
    topScore: 0,
    isGameCond: true,
  }

  resetGame = () => {
    this.setState({newEmojisList: [], isGameCond: true})
  }

  renderResultCard = () => {
    const {newEmojisList} = this.state
    const {emojisList} = this.props
    const isWonLoss = newEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWonLoss={isWonLoss}
        score={newEmojisList.length}
        playGameAgain={this.resetGame}
      />
    )
  }

  finishGameAndUpdateTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (currentScore > newScore) {
      newScore = currentScore
    }

    this.setState({topScore: newScore, isGameCond: false})
  }

  randomEmojisList = id => {
    const {emojisList} = this.props
    const {newEmojisList} = this.state
    const clickedEmojis = newEmojisList.includes(id)
    const newEmojisLength = newEmojisList.length

    if (clickedEmojis) {
      this.finishGameAndUpdateTopScore(newEmojisLength)
    } else {
      if (newEmojisLength === emojisList.length - 1) {
        this.finishGameAndUpdateTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        newEmojisList: [...prevState.newEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffleEmojis = this.shuffledEmojisList()

    return (
      <ul className="emoji-list">
        {shuffleEmojis.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            randomEmojisList={this.randomEmojisList}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {newEmojisList, topScore, isGameCond} = this.state

    return (
      <div className="emoji-container">
        <NavBar
          topScore={topScore}
          currentScore={newEmojisList.length}
          isGameCond={isGameCond}
        />
        <div className="responsive-container">
          {isGameCond ? this.renderEmojisList() : this.renderResultCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
