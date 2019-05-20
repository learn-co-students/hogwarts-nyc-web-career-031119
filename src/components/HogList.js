import React, {Component} from 'react'
import Card from './Card'

class HogList extends Component {

	handleGreaseChange = (hogs) => {
		console.log(this.props);
		switch (this.props.showGreased){
			case 'both':
				return hogs;
			case 'yes':
				return this.filterHogs(hogs, true);
			case 'no':
				return this.filterHogs(hogs, false);
			default:
				return hogs
		}
	};

	filterHogs = (hogs, parameter) => {
		return hogs.filter((hog) => hog.greased === parameter)
	};

	render() {
		return (
			<div>
				{this.handleGreaseChange(this.props.hogs).map(hog => {
					return <Card hog={hog} key={hog.name} slugify={this.props.slugify}/>
				})}
			</div>
		);
	}
}

export default HogList
