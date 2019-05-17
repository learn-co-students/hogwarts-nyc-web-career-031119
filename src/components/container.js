import React, {Component} from 'react'
import Tile from './tile'

class Container extends Component {

  renderHogs = () => {
    return this.props.hogs.map(hog => {
      console.log("oink", hog.name)
      return <Tile detail={hog}/>
    })
  }

  render () {
    return(
      <span className="ui cards">
      {this.renderHogs()}
      </span>
    )
  }
}

export default Container
