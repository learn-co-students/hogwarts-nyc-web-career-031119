import React from "react";
// import hogs from '../porkers_data';

class Hog extends React.Component {
  state = {
    card: "back"
  };
  handleeClick = () => {
    console.log("lcick");

    this.state.card === "front"
      ? this.setState({
          card: "back"
        })
      : this.setState({
          card: "front"
        });
  };
  render() {
      console.log(`${this.props.piggy.name.toLowerCase().split(" ").join("_")}.jpg`)
    return (
      <div
        id={this.props.piggy.name}
        className="ui card"
        onClick={this.handleeClick}
      >
        {this.state.card === "front" ? (
          <div>
            <p>Name: {this.props.piggy.name}</p>
            <p> Specialty: {this.props.piggy.specialty}</p>
            <p>greased? {this.props.piggy.greased ? "true" : "false"}</p>
            <p>
              weight Ratio:{" "}
              {
                this.props.piggy[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </p>
            <p>medal: {this.props.piggy["highest medal achieved"]}</p>
          </div>
        ) : (
          <div>
              <img src={`./hog-imgs/${this.props.piggy.name.toLowerCase().split(" ").join("_")}.jpg`} 
              alt={this.props.piggy.name}
              />
              <div>
                  {this.props.piggy.name}
              </div>
            </div>
        )}
      </div>
    );
  }
}
// name: 'Porkchop',
//     specialty: 'Making friends',
//     greased: true,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.6,
//     'highest medal achieved': 'silver'
export default Hog;
