import React from 'react'
export default class DetailCard extends React.Component{


  render(){
    return(
      <div onClick={this.props.toggleClick} className="pigTile">
        <div className="details">
          <p>{this.props.hogName}</p>
          <p>{this.props.hogSpecialty}</p>
          <p>{this.props.hogGreased? "I am Greeeeced" : "I am not Greeced"}</p>
          <p>{this.props.hogMedal}</p>
          <p>{this.props.hogWeight}</p>
        </div>
      </div>
    )
  }
}
