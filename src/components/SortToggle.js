import React from 'react'
export default class SortToggle extends React.Component{

  render(){
    return(
      <div className="ui form">
      <h3>Sort By</h3>
      <div className="field">
        <select onChange={this.props.sortSelector} name="type" id="type">
          <option value="">Please Choose an Option</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
    )
  }
}
