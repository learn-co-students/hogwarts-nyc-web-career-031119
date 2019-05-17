import React, {Component} from 'react'



class Front extends Component {


  grabImg = () => {
    const name = this.props.detail.name.toLowerCase().split(" ").join("_")
    return name
  }
  // <img src={`../../public/hog-imgs/${this.grabImg()}.jpg`} />



  render () {
    return(
      <span className="ui card" onClick={this.props.handleClick}>
      <img src={`./hog-imgs/${this.grabImg()}.jpg`} />
      {this.props.detail.name}
      </span>
    )
  }
}

export default Front
