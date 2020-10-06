import React, {Component, useState} from "react";
import '../styles/App.css';
import Clock from "./Clock";
import Hour from "./Hour";
import Minute from "./Minute";

class App extends Component {
    render() {

        return(
            <>
               <Clock>
                   <Hour />
                   <Minute />
               </Clock>
            </>
        )
    }
}


export default App;
