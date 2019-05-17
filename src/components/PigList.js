import React from 'react'
import hogs from '../porkers_data.js'
import ToggleCard from './ToggleCard.js'
import GreaseToggler from './GreaseToggler.js'
import SortToggle from './SortToggle.js'
export default class PigList extends React.Component{

  state = {
    renderedHogs: hogs
  }

  handleGrease = (e) => {

    const listOfHogs = hogs.filter(hog => {
      if (e.target.value === "all") {
        return hog
      } else if (e.target.value === "greased" && hog.greased) {
        return hog
      } else if (e.target.value === "dry" && !hog.greased) {
        return hog
      }
    })

    // console.log(filteredHogs)
    this.setState({
      renderedHogs: listOfHogs
    })
  }

  handleSort = (e) => {
    let sortedHogs = []
    if (e.target.value === "name") {
      sortedHogs = this.state.renderedHogs.sort( (a, b) => {
        return (a.name > b.name) ? 1 : -1
      })
    } else if (e.target.value === "weight") {
      sortedHogs = this.state.renderedHogs.sort( (a, b) => {
        return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : -1
      })
    }
    this.setState({renderedHogs: sortedHogs})
  }


  render(){
    // console.log("THE CURRENT HOGS IS THIS", this.state.renderedHogs)
    const filteredHogs = this.state.renderedHogs.map(hog => {
      return <ToggleCard
      hogName={hog.name}
      hogSpecialty={hog.specialty}
      hogGreased={hog.greased}
      hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      hogMedal={hog['highest medal achieved']}
      />
    })
    // const allHogs = hogs

    // take the list of Hogs and filter to just the ones you want
    // [{name, greased}, {name, greased}, ...]
    // map this to an array of React Components
    // render this ^

    // const listOfHogs = allHogs.filter(hog => {
    //   if (this.state.greaseSelector === "all") {
    //     return hog
    //   } else if (this.state.greaseSelector === "greased" && hog.greased) {
    //     return hog
    //   } else if (this.state.greaseSelector === "dry" && !hog.greased) {
    //     return hog
    //   }
    // })
    // const filteredHogs = listOfHogs.map(hog => {
    //   return <ToggleCard
    //   hogName={hog.name}
    //   hogSpecialty={hog.specialty}
    //   hogGreased={hog.greased}
    //   hogWeight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
    //   hogMedal={hog['highest medal achieved']}
    //   />
    // })

    // console.log(hogs)
    console.log("THIS IS THE CURRENT STATE OF THE RENDERED HOGS", this.state.renderedHogs)
    return (

      <div className='ui grid container'>
        <GreaseToggler greaseSelector={this.handleGrease}/>
        <SortToggle sortSelector={this.handleSort}/>
        <div>
          {filteredHogs}
        </div>
      </div>
    )
  }
}
