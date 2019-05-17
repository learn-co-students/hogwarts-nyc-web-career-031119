import React from 'react'
import Tile from './Tile'

class Details extends React.Component{

  // state = {details: false}
  //
  // toggleDetails = () => {
  //     this.setState({details: true})
  // }

  render (){
    const hog = this.props.hog

        return (

          <div className="ui card content pigTile" onClick={this.props.toggle}> <br/>
            <h3 className="ui header"> { hog.name }</h3>
              <ul >
                <li className="ui sub header"> Specialty: { hog.specialty }</li>
                <li className="ui sub header"> Greased? { `${hog.greased}` }</li>
                <li className="ui sub header"> Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': { hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] }</li>
                <li className="ui sub header"> Highest Medal Achieved: { hog['highest medal achieved'] }</li>
              </ul>
          </div>
        )


  }
}

export default Details
