import React from 'react';

class Buttons extends React.Component {

  render(){
    console.log("button", this);
    return(
      <div id="buttons">
        <button onClick={this.props.onNameClick}>Sort By Name</button>
        <button onClick={this.props.onWeightClick}>Sort By Weight</button>
        <input type="checkbox" name="greased" onChange={this.props.onFilter}/>Greased Hogs
      </div>
    )
  }
}

export default Buttons
