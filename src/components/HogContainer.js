import React from 'react';
import HogInfo from './HogInfo'
import Buttons from './Buttons'
import hogs from '../porkers_data';

class HogContainer extends React.Component {

  state = {
    hogs: [],
    filter: false
  }

  componentDidMount() {
    // fetch.then().then((hogs) =>  SET STATE HERE )
    this.setState({hogs: hogs})
  }


  sortByName = () => {
    // console.log("yo", this.state);
    this.setState({
      hogs: this.state.hogs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    })
  }

  sortByWeight = () => {
    // console.log("yo", this.state);
    // console.log(this.state.hogs.sort((a,b) => (a.weight > b.weight) ? 1 : ((b.weight > a.weight) ? -1 : 0)));
    this.setState({
      hogs: this.state.hogs.sort((a,b) => (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : ((b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? -1 : 0))
    })
  }

  filterGreasedHogs = () => {
    this.setState({
      filter: !this.state.filter
    })

  }


  render() {
    console.log('Container', this.state);
    const filteredHogs = this.state.hogs.filter(hog => {
      if (this.state.filter === false) {
        return hog
      } else {
        return hog.greased === true
      }
    })

    return (
      <div>
        <Buttons onNameClick={this.sortByName} onWeightClick={this.sortByWeight} onFilter={this.filterGreasedHogs}/>
        <div className="ui grid container">
        {filteredHogs.map(hog => {
          return <HogInfo hog={hog} />
        })}
        </div>
      </div>
    );

  }


}

export default HogContainer
