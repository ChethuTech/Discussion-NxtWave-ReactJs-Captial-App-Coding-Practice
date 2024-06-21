import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capital extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onSelect = element => {
    this.setState({countryId: element.target.value})
  }

  getCountry = () => {
    const {countryId} = this.state
    const country = countryAndCapitalsList.find(
      eachItem => eachItem.id === countryId,
    )
    return country
  }

  render() {
    const {country, id} = this.getCountry()
    return (
      <div className="bg-container">
        <div className="capital-card">
          <h1 className="heading"> Countries And Capitals</h1>

          <div className="select-container">
            <select onChange={this.onSelect} className="select" value={id}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="label" htmlFor="capital">
              is capital of which country
            </p>
          </div>

          <p className="country"> {country} </p>
        </div>
      </div>
    )
  }
}

export default Capital
