import React from "react";
import React, { useState, useEffect } from 'react';

export default class TrafficLightHooks extends React.Component {
	//constructor() {
	//	super();
	//	this.state = {
	//		clickedLight: null
	//	};
    //}
      //    useEffect(() =>
        // this will run every time the component re-renders
     //   if(some_condition){
            //this will run only if some_condition is true
    //    }
    //);// <------ PLEASE NOTICE THE EMPTY ARRAY IS GONE!

 //   return <Some HTML>;
//}

	render() {
        console.log(this.state);
        let [ mySuperVariable, mySuperFunction ] = useState( null );





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