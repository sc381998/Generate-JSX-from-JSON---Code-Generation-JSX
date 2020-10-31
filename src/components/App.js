import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.convertJSONtoJSX = this.convertJSONtoJSX.bind(this);
  }
  data = {
    type: "div",
    name: "Clock",
    root: true,
    style: {
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center"
    },
    children: [
      {
        type: "div",
        name: "Hour",
        style: {},
        children: []
      },
      {
        type: "span",
        name: "Minute",
        style: {
          color: "green",
          "font-size": 30
        },
        children: []
      }
    ]
  };

  convertJSONtoJSX(obj, arr) {
    if (!Array.isArray(obj.children) && !obj.children.length) {
      arr.push("</" + obj.name + ">");
    }
    if (obj.hasOwnProperty("name")) {
      arr.push(
        "<" + obj.name + " type=" + obj.type + " style=" + obj.style + ">"
      );
    }
    if (obj.hasOwnProperty("children")) {
      for (let i = 0; i < obj.children.length; i++) {
        this.convertJSONtoJSX(obj.children[i], arr);
      }
    }
    return arr;
  }
  arr = [];
  render() {
    return <>{this.convertJSONtoJSX(this.data, this.arr).map((ele) => ele)}</>;
  }
}

export default App;
