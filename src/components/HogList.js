import React from 'react';
import HogTile from './HogTile';

class HogList extends React.Component {

  render() {
    let hogs = this.props.hogs
    return (
      <div className='hoglist ui link cards'>
        { hogs.map( (hog, idx) => <HogTile hog={hog} key={idx} />) }
      </div>
    );
  };
};

export default HogList;
