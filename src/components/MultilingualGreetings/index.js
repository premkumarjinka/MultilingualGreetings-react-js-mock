import './index.css'

const MultilingualGreetings = props => {
  const {details, isActive, onButtonActive} = props
  const {buttonText, imageUrl, imageAltText} = details

  const onButton = () => {
    onButtonActive(buttonText)
  }

  return (
    <li className="button-container">
      <div>
        <button type="button" onClick={onButton}>
          {buttonText}
        </button>
      </div>
      <div className="image-container">
        {isActive && <img src={imageUrl} alt={imageAltText} />}
      </div>
    </li>
  )
}
export default MultilingualGreetings
