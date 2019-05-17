import React from 'react';

class Filter extends React.Component {

  render() {
    return (
      <div className="ui icon input">
        <input type='text' placeholder="Search" style={{marginBottom: '15px'}} value={this.props.search} onChange={this.props.onChange} />
        <button className="ui red button" onClick={this.props.greased}>Greased</button>
        <button className="ui red button" onClick={this.props.notGreased}>Not Greased</button>
        <button className="ui red button" onClick={this.props.all}>All</button>
        <button className="ui red button" onClick={this.props.onWeightClick}>Sort By Weight</button>
      </div>
    );
  };
};

export default Filter;
