import React, { Component } from "react";
import "./style.css";

function Navbar (props) {
    return (
        <nav className="navbar navbar-dark bg-dark row">
            <div className = "col-3">
                <a className="navbar-brand" href="/">Clicky Memory Game</a>
            </div>
            <div className = "col-4">
                {props.guess}
            </div>
            <div className="col-2">
                <a className="Navlink" onClick={props.onClick}>{props.hard ? "Hard Mode" : "Easy Mode"}</a>
            </div>
            <div className = "col-3">
                Score: {props.score} | {props.wins > 0 ? ("Total Wins: " + props.wins) : ("Top Score: "+props.topScore)}
            </div>
        </nav>
    )
}

export default Navbar;