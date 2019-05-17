import React from 'react'

class Filter extends React.Component {


  render(){
    return (
          <div>
            <select onChange={this.props.handleChange} >
              <option value="all">All</option>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
              <option value="greased">Is Greased?</option>
            </select>
          </div>
    )
  }
}

export default Filter
