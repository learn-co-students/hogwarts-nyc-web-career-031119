import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import Filter from './Filter'

class App extends Component {

  state = {
    all: hogs,
    hogs: hogs,
    search: ''
  };

  nameSearch = (e) => {
    this.setState({search: e.target.value})
  };

  sortByWeight = () => {
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
    let sortedHogs = this.state.all.sort((a, b) => b[weight] - a[weight])
    this.setState({hogs: sortedHogs})
  };

  greased = () => {
    let greasedHogs = this.state.all.filter(hog => hog.greased)
    this.setState({hogs: greasedHogs})
  };

  notGreased = () => {
    let greasedHogs = this.state.all.filter(hog => !hog.greased)
    this.setState({hogs: greasedHogs})
  };

  all = () => {
    this.setState({hogs: this.state.all});
  };

  render() {
    let hogs = this.state.hogs.filter(hog => {
          return hog.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
    return (
      <div className="App">
          <Nav />
          <Filter onChange={this.nameSearch} onWeightClick={this.sortByWeight} greased={this.greased} notGreased={this.notGreased} all={this.all}/>
          <HogList hogs={hogs} />
      </div>
    );
  };
};

export default App;
