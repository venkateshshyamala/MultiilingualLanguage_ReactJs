import './index.css'

const GreetingItem = props => {
  const {isActive, onClickChangeLanguage, languageGreetingsItems} = props
  const {buttonText, id} = languageGreetingsItems

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeTabBtnClassName = isActive ? 'highlighted' : 'not-highlighted'

  return (
    <ul className="button-container">
      <li className="list-container">
        <button
          type="button"
          value={isActive}
          className={`buttons ${activeTabBtnClassName}`}
          onClick={onClickButton}
        >
          {buttonText}
        </button>
      </li>
    </ul>
  )
}

export default GreetingItem
