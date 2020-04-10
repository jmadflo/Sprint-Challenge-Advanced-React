import React, { Component } from 'react'
import axios from 'axios'
import PlayerList from './components/PlayerList'
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

  //form methods
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
        this.props.setDataRendered(this.state.dataToRender)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchInput !== prevState.searchInput){
      this.setState({
        dataToRender: this.state.data.filter( player => {
          return player.name.includes(this.state.searchInput)
        })
      })
      this.props.setDataRendered(this.state.dataToRender)
    }
  }

  render() {
    return (
      <div className="App">
        <h1 datatest-id="h1">Women's World Cup Data</h1>
        <PlayerList dataRendered={this.props.dataRendered} updateSearch={this.updateSearch} data={this.state.data} searchInput={this.state.searchInput}/>
      </div>
    )
  }
}

export default App
