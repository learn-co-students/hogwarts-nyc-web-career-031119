import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './container'
import Sort from './sort'

class App extends Component {

  state = {all: []}

  componentDidMount() {
    console.log("Mounted")
    this.setState({all: hogs})
  }


  sortHogs = () => {
    let hoggies = [...this.state.all]
    hoggies.sort((a,b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    this.setState({all: hoggies})
  }

  sortHogNames = () => {
    let hoggies = [...this.state.all]
    hoggies.sort((a, b) => {
      let nameA = a["name"]
      let nameB = b["name"]
      return nameA < nameB ? -1 : 1
    })
    this.setState({all: hoggies})
  }

  filterGreased = () => {
    let hoggies = this.state.all.filter(hog => hog.greased === true)
    this.setState({all: hoggies})
  }

  filterUnGreased = () => {
    let hoggies = this.state.all.filter(hog => hog.greased === false)
    this.setState({all: hoggies})
  }

  filterAll = () => {
    this.setState({all: hogs})
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Sort sortHogs={this.sortHogs} sortHogNames={this.sortHogNames} filterGreased={this.filterGreased} filterUnGreased={this.filterUnGreased} filterAll={this.filterAll}/>
          < Container hogs={this.state.all}/>
      </div>
    )
  }
}

export default App;
