import React from "react";
import Hog from "./Hog";
// import pic from "../hog-imgs"


class MainContainer extends React.Component {
  state = {
    hogs: this.props.piggy,
    back:[]
  };

  handleSelectChange = e => {
    console.log("asd", e.target.value);
    const hogArray = [...this.props.piggy]

    switch (e.target.value) {
      case 'All':
        this.setState({
              hogs: hogArray
          })
        break;
      case 'Sort A-Z':
            this.setState({
                hogs: hogArray.sort((a, b) => {
                  let nameA = a.name.toUpperCase();
                  let nameB = b.name.toUpperCase();
          
                  return nameA < nameB ? -1 : 1;
                })
              });
        break;
      case 'Sort by Grease':
            this.setState({
                hogs: hogArray.filter((a) => {
                  return a.greased === true
                })
              });
        break;
      case 'Sort by Ratio (High -Low)':
            this.setState({
                hogs: hogArray.sort((a, b) => {
                  
                  return  b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
                })
              });
        break;
        case 'Sort by Ratio (Low- High)':
                this.setState({
                    hogs: hogArray.sort((a, b) => {
                      
                       return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']- b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
                       
                    })
                  });
            break;
      default:
        break;
    }
    return e.target.value;
  };

  handleCardClick = (e) => {
    const hogArray = [...this.props.piggy]

      hogArray.map((hog)=>{
        // console.log('clciked', e, hog.name);
       return e.target.id === hog.name ? console.log('clciked', hog.name) : "nah";
        // <Hog piggy={hog}/>;
    })   
  };

  render() {
    // console.log("here", this.props.piggy);
    return (
      <div>
        <div>
          <select
            onChange={e => {
              this.handleSelectChange(e);
            }}
          >
            <option>All</option>
            <option>Sort A-Z</option>
            <option>Sort by Grease</option>
            <option>Sort by Ratio (High -Low)</option>
            <option>Sort by Ratio (Low- High)</option>
          </select>
        </div>
        <div className="ui grid container">
          {this.state.hogs.map(hog => {
            return (
              <Hog key={hog.name} clickFunc={this.handleCardClick} piggy={hog} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainContainer;
