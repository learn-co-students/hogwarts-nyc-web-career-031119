import React from 'react'

class Sort extends React.Component {

  render () {
    return(
      <div>
      <button onClick={this.props.sortHogs}>Sort by fridge ratio!</button>
      <button onClick={this.props.sortHogNames}>Sort by NAAAAAAME!</button>
      <button onClick={this.props.filterGreased}>gimmme them squeelers</button>
      <button onClick={this.props.filterUnGreased}>gimme them dry ones</button>
      <button onClick={this.props.filterAll}>IT'SA BACON TIME</button>
      <br></br>
      <br></br>
      </div>
    )
  }

}

export default Sort
