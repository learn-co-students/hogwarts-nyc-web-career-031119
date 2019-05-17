import React from 'react'
import Tile from './Tile'
import Details from './Details'

class HogsList extends React.Component{

  render(){

    const hogTiles =  this.props.hogs.map(hog => {
    // return <Tile hog={hog} details={this.props.details} />
        return <Tile hog={hog} />
      })

    return (
      <div className="ui grid container link cards"> {hogTiles} </div>
    )
  }
}

export default HogsList
