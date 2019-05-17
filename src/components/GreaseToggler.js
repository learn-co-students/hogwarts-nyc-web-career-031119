import React from 'react'
export default class GreaseToggler extends React.Component{

  render(){
    return(
      <div className="ui form">
        <h3>GREASE?!?!?!?!?</h3>
        <div className="field">
          <select onChange={this.props.greaseSelector} name="type" id="type">
            <option value="">Please Choose an Option</option>
            <option value="all">All</option>
            <option value="greased">GREASE THEM UP</option>
            <option value="dry">I LIKE EM DRY</option>
          </select>
        </div>
      </div>
    )
  }
}
