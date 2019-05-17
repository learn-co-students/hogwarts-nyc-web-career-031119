import React from 'react';
import HogCard from './HogCard'
import DetailCard from './DetailCard'


class HogInfo extends React.Component {

  state= {
    detail: false
  }

  handleClick = (e) => {
    console.log("clicked!!");
    this.setState({
      detail: !this.state.detail
    })
  }

  render(){
    console.log(this.state);

    if (this.state.detail === false) {
      return (
        <HogCard hog={this.props.hog} onHandleClick={this.handleClick}/>
      );
    } else if (this.state.detail === true) {
      return (
        <DetailCard hog={this.props.hog} onHandleClick={this.handleClick}/>
      );
    }

  }

}

export default HogInfo
