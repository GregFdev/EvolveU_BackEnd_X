import React, { Component } from "react";
import FlaskList from "./FlaskList";
import "./FlaskList.css";

export default class FlaskExerciseRender extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }

  callExcel = async () => {
    const excelItems = await fetch("http://127.0.0.1:5000/load_excel/", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const jsonexcelItems = await excelItems.json();
    this.setState({ data: jsonexcelItems });
  };

  render() {
    return (
      <div>
        <div onClick={this.callExcel}>Button to call excel sheet</div>
        {this.state.data && <FlaskList {...this.state} />}
      </div>
    );
  }
}
