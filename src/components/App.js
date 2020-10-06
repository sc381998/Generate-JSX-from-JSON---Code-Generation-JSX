import React, {Component, useState} from "react";
import '../styles/App.css';
import Clock from "./Clock";
import Hour from "./Hour";
import Minute from "./Minute";


const clockStyle = {
    display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

const minuteStyle = {
    color: "green",
    fontSize: 30,
  };

class App extends Component {
    render() {

        return(
            <>
               <Clock style={clockStyle}>
                   <Hour/>
                   <Minute style={minuteStyle}/>
               </Clock>
            </>
        )
    }
}


export default App;
