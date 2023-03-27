import {Component} from 'react'
import MultilingualGreetings from './components/MultilingualGreetings'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeButton: languageGreetingsList[0].buttonText}

  onButtonActive = buttonText => {
    this.setState({activeButton: buttonText})
  }

  render() {
    const {activeButton} = this.state
    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul className="container">
          {languageGreetingsList.map(eachItem => (
            <MultilingualGreetings
              details={eachItem}
              key={eachItem.id}
              isActive={activeButton === eachItem.buttonText}
              onButtonActive={this.onButtonActive}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
