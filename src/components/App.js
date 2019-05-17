import React, {Component} from 'react';
import '../App.css';
import Nav                from './Nav'
import allHogs from '../porkers_data'
import HogList from './HogList'
import Dropdown from './Dropdown'
import DropGreased from './DropGreased'

class App extends Component {
	state = {
		current: 'name',
		hogs: allHogs,
		showGreased: 'both'
	};

	handleGreasedToggle = e => {
		console.log("GREASED")
		this.setState({
			showGreased: e.target.value
		})
	};

	handleDropdownChange = e => {
			console.log('DROPDOWN VALUE', e.target.value);
		this.setState({
			current: e.target.value
		},() => this.sortHogsByName(this.state.hogs));
	};

	sortHogsByName = (hogs) => {
		let sortedHogs = [];
		console.log(' CURRENT STATE', this.state.current)
		let weightKey = ['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];

		if (this.state.current === 'name') {
			console.log('Name');
			sortedHogs = hogs.sort((a, b) => {
				if(a.name < b.name){return -1}
				if(a.name > b.name){return 1}
				return 0
			})
		} else if (this.state.current === 'weight') {
			console.log('weight');
			sortedHogs = hogs.sort((a, b) => {
				if(a[weightKey] < b[weightKey]){return -1}
				if(a[weightKey] > b[weightKey]){return 1}
				return 0
			})
		} else {
			console.log('all');
			sortedHogs = allHogs
		}
		this.setState({
			hogs: sortedHogs
		})
	};

	componentDidMount() {
		this.sortHogsByName(this.state.hogs)
	}

	slugify = (name) => {
		return name.toLowerCase().split(' ').join("_")
	};

	render() {
		return (
			<div className="App">
				< Nav />
				<Dropdown handleDropdownChange={this.handleDropdownChange}/>
				<DropGreased  handleGreasedToggle={this.handleGreasedToggle}/>
				<HogList showGreased={this.state.showGreased} greased={this.handleGreasedToggle} slugify={this.slugify} hogs={this.state.hogs}/>
			</div>
		)
	}
}

export default App;
