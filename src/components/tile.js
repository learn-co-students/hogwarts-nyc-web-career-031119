import React, {Component} from 'react'
import Front from './front-hog'
import Back from './back-hog'



class Tile extends Component {

  state = {front: true}

  // <img src={`../../public/hog-imgs/${this.grabImg()}.jpg`} />

  handleClick = () => {
    this.setState(prevState => {
      prevState.front = !prevState.front
    })
  }


  renderCard = () => {
    
    return this.state.front ? <Front handleClick={this.handleClick} detail={this.props.detail}/> : <Back handleClick={this.handleClick} detail={this.props.detail}/>
  }



  render () {
    return(
      <div>
      {this.renderCard()}
      </div>
    )
  }
}

export default Tile
