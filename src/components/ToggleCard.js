import React from 'react'
import PigCard from './PigCard.js'
import DetailCard from './DetailCard.js'
export default class ToggleCard extends React.Component{
  constructor(){
    super()
    this.state = {details: false}
  }

  handleToggle = () => {
    this.setState(prevState => ({
      details: !prevState.details
    }))
    // this.setState()
  }

  render(){
    // console.log(this.state.details)
    return(
      <div>{!this.state.details ? <PigCard hogName={this.props.hogName} toggleClick={this.handleToggle}/> :
      <DetailCard
        hogName={this.props.hogName}
        hogSpecialty={this.props.hogSpecialty}
        hogGreased={this.props.hogGreased}
        hogWeight={this.props.hogWeight}
        hogMedal={this.props.hogMedal}
        toggleClick={this.handleToggle}
      />}
    </div>
    )
  }
}
