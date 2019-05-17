import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
// import Tile from './Tile'
import HogsList from './HogsList'
import Filter from './Filter'

class App extends Component {

  state = {hogs,
          filters:{
            type: 'all'
          }
  }

  handleChange = (e) => {
    this.setState({filters: {
      type: e.target.value
    }})
  }

  filteredHogs = () => {
    if(this.state.filters.type === "all"){
      return hogs
    } else if (this.state.filters.type === 'name'){

      const nameSort = hogs.sort((a,b) =>{
         let nameA = a.name.toUpperCase()
         let nameB = b.name.toUpperCase()
           if (nameA < nameB){
             return -1
           }
           if (nameA > nameB){
             return 1
           }
           return 0
       })
       return nameSort
    } else if (this.state.filters.type === 'weight'){
        const weightSort = hogs.sort((a,b) => {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        })
        return weightSort
    } else if (this.state.filters.type === 'greased'){
        const greaseSort = hogs.filter(hog => {
            return hog.greased
          })
        return greaseSort
    }
  }


  render() {
    // console.log(this.state.filters.type)
    // console.log(hogs)
    // const filterHogs = this.filteredHogs()
    return (
      <div className="App">
          < Nav />
          < Filter handleChange={this.handleChange} /> <br/>
          < HogsList hogs={this.filteredHogs()} />
      </div>
    )
  }
}

export default App;
