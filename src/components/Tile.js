import React from 'react'
import Details from './Details.js'

class Tile extends React.Component{

  state = {details: false}

  toggleDetails = () => {
    this.setState({details: true})
  }

  handleClick = (e) => {
    e.preventDefault()
    e.target.parentElement.style.display = "none"
  }

  render (){
    console.log(this.state.details)
    const pigName = this.props.hog.name.toLowerCase().split(' ').join('_')
    const hog = this.props.hog
    
    if(this.state.details === false){
      return (
      <div className="ui eight wide column">
        <div className="card pigTile" onClick={this.toggleDetails}>
          <p> {hog.name }</p>
          <img src={process.env.PUBLIC_URL + `/pics/${pigName}.jpg`} /><br/>
        </div>
        <button onClick={this.handleClick}>Hide Hog</button>
      </div>
    )}
    else if (this.state.details === true) {
      return  <Details hog={this.props.hog} />
    }
  }
}

export default Tile
