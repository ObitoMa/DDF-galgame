import './ChoiceBox.css'

function ChoiceBox({ text, options, onChoice }) {
  return (
    <div className="choice-box">
      <div className="choice-prompt">{text}</div>
      <div className="choice-options">
        {options.map((option, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => onChoice(option.next)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ChoiceBox

