import React, {Component} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

class Card extends Component {

	state = {
		front: true,
		show: true
	};

	handleClick = () => {
		this.setState(prevState => ({
			front: !prevState.front
		}));
		console.log(this.state)
	};

	handleHiding = () => {
		this.setState({
			show: false
		})
	};

	render() {
		return (
			<div>
				{this.state.show ?
				(<div className="ui card" onClick={this.handleClick}>
					{this.state.show ? (this.state.front ? < CardFront handleHiding={this.handleHiding} hog={this.props.hog} slugify={this.props.slugify} /> : <CardBack hog={this.props.hog}/>): null}
				</div>) : null }
			</div>
		);
	}
}

export default Card
