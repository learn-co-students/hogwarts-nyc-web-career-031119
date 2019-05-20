import React, { Component } from 'react'
import Card from './Card'

class CardFront extends Component {


	handleClick = () => {
		this.setState(prevState => ({
			front: !prevState.front
		}));
		console.log(this.state)
	};

	render() {
		const { name } = this.props.hog;

		return (
			<div>
				<div className="image">
					<img src={`./hog-imgs/${this.props.slugify(name)}.jpg`} />
				</div>
				<div className="content">
					<a className="header">{name}</a>

				</div>
				<div className="extra content">
					<a>
						<i className="angle down"/>
						22 Friends
					</a>
					<button className="ui button" onClick={this.props.handleHiding}>Hide</button>
				</div>
			</div>


		);
	}
}

export default CardFront