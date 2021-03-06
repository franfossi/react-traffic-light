import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		console.log(this.state);
		let redGlowClass = "";
		if (this.state.clickedLight == "red") redGlowClass = "selected";
		let yellowGlowClass = "";
		if (this.state.clickedLight == "yellow") yellowGlowClass = "selected";
		let greenGlowClass = "";
		if (this.state.clickedLight == "green") greenGlowClass = "selected";

		return (
			<div>
				<div id="traffictop" />
				<div id="container">
					<div
						className={"red light " + redGlowClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowGlowClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenGlowClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
