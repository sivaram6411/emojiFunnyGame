// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, randomEmojisList} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    randomEmojisList(id)
  }

  return (
    <li className="emoji-list-container">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
