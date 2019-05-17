import React from 'react';
// import Details from './Details';

class HogTile extends React.Component {

  state ={
    showDetails: false
  };

  formatName = (hog) => {
    return hog.name.toLowerCase().split(" ").join("_");
  };

  onTileClick = () => {
    this.state.showDetails ? this.setState({showDetails: false}) : this.setState({showDetails: true})
  };

  render() {
    // console.log("from hogtile", this.props.hog);
    let hog = this.props.hog;
    // console.log(this.formatName(hog));
    let weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
    return (
      <div className="card" onClick={ this.onTileClick }>
        <div className="image">
          <img src={`./${this.formatName(hog)}.jpg`} alt="hog"/>
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          {this.state.showDetails ? <div className='description'> specialty: {hog.specialty} <br /> {`${weightKey}:`} {hog[weightKey]} <br />highest medal achieved: {hog['highest medal achieved']}</div> : null }
        </div>
      </div>
    );
  };
};

export default HogTile;
