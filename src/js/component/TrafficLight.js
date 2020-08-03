import React from "react";

export default class TrafficLight extends React.Component {
	render() {
		return (
			<div>
				<div id="traffictop" />
				<div id="container">
					<div className="red light selected" />
					<div className="yellow light" />
					<div className="green light" />
				</div>
			</div>
		);
	}
}
