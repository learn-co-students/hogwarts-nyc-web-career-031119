import React, {Component} from 'react'



class Back extends Component {

  grabImg = () => {
    const name = this.props.detail.name.toLowerCase().split(" ").join("_")
    return name
  }
  // <img src={`../../public/hog-imgs/${this.grabImg()}.jpg`} />

  // name: 'Mudblood',
  // specialty: 'Mediocre magic',
  // greased: false,
  // 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
  // 'highest medal achieved': 'bronze'


  render () {
    return(
      <span className="ui card" onClick={this.props.handleClick} style={{padding: '60px'}}>
      <div>
        <p>Specialty: {this.props.detail.specialty}</p>
        <p>Are they greased? {this.props.detail.greased ? "Ya" : "Nah"}</p>
        <p>Weight Ratio to a dang Fridge: {this.props.detail['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Best Medal: {this.props.detail['highest medal achieved']}</p>
      </div>
      </span>
    )
  }
}

export default Back
