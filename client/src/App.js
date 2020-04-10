import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
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
      </div>
    )
  }
}

export default App
