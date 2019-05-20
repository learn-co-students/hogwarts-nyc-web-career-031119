import React, {Component} from 'react'

class DropGreased extends Component {
	render() {
		return (
			<div> Greased?
				<select className="ui search dropdown" onChange={this.props.handleGreasedToggle}>
					<option value="both">Both</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</div>
		);
	}
}

export default DropGreased
