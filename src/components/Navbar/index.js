import React, { Component } from "react";
import "./style.css";

function Navbar (props) {
    return (
        <nav className="navbar navbar-dark bg-dark row">
            <div className = "col-4">
                <a className="navbar-brand" href="/">Clicky Memory Game</a>
            </div>
            <div className = "col-4">
                {props.guess}
            </div>
            <div className = "col-4">
                Score: {props.score} | Top Score: {props.topScore}
            </div>
        </nav>
    )
}

export default Navbar;