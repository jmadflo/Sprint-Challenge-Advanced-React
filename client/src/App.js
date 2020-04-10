import React, { Component } from 'react'
import axios from 'axios'
import PlayerCard from './components/PlayerCard'
import SearchBar from './components/SearchBar'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      dataToRender: [],
      searchInput: ''
    }
  }

  // form methods
  updateSearch = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  // life cycle methods
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data,
          dataToRender: response.data
        })
        console.log(this.state)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchInput !== prevState.searchInput){
      this.setState({
        dataToRender: this.state.data.filter( player => {
          return player.name.includes(this.state.searchInput)
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 datatest-id="">Women's World Cup Data</h1>
        <SearchBar updateSearch={this.updateSearch} searchInput={this.state.searchInput}/>
        <div className="playerCardContainer">
          {this.state.dataToRender.map(player => {
            return <PlayerCard data-testid={player.name} player={player} key={player.id} />
          })}
        </div>
      </div>
    )
  }
}

export default App
