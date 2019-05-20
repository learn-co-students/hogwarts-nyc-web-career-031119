import React, { Component } from 'react'
import Card from './Card'


class CardBack extends Component {
	render() {
		const { name, specialty, greased } = this.props.hog;

		return (
			<div>
				<div className="content">
					<h3>{specialty}</h3>
					<h4>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>


					<div className="description">
					</div>
				</div>
				<div className="extra content">
					<a>
						<i className="jenkins"></i>
						22 Friends
					</a>
				</div>
			</div>
		);
	}
}

export default CardBack