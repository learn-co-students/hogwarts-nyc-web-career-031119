import React from 'react'


class HogCard extends React.Component {


  snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
  }


  render(){
    // console.log(this.props.hog.name);
    return(

      <div onClick={this.props.onHandleClick} className="ui eight wide column pigTile">
        <img src={`./hog-imgs/${this.snakeCase(this.props.hog.name)}.jpg`}></img>
        <h2 className="name">{this.props.hog.name}</h2>
      </div>
    )
  }

}

export default HogCard
