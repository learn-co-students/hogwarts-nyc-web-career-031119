import React from 'react';

class DetailCard extends React.Component {



  render(){
    return (
      <div onClick={this.props.onHandleClick} className="ui eight wide column card">
        <h2 className="name">{this.props.hog.name}</h2>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {this.props.hog.greased ? "Yes" : "No"}</p>
        <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
        <p>Weight as Ratio: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
      </div>
    );
  }
}

export default DetailCard
