import React from 'react'
export default class PigCard extends React.Component{

  // handleClick = (e) =>{
  //
  // }

  render(){
    const sanitizeName = this.props.hogName.toLowerCase().replace(/ /g, "_")
    // console.log(sanitizeName)
    return(
      <div onClick={this.props.toggleClick} className="pigTile">
        <div className="image">
          <img src={require(`../hog-imgs/${sanitizeName}.jpg`)}/>
        </div>
        <div className="content">
          <a className="header">{this.props.hogName}</a>
        </div>
      </div>
    )
  }
}
