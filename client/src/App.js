import React, { Component } from 'react'
import axios from 'axios'
import PlayerCard from './components/PlayerCard'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data
        })
        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Data</h1>
        <div className="playerCardContainer">
          {this.state.data.map(player => {
            return <PlayerCard player={player} key={player.id} data-testid={player.id}/>
          })}
        </div>
      </div>
    )
  }
}

export default App
