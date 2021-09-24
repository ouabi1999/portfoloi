import React, { Component } from 'react'
import "./header.css"
import {Link } from "react-router-dom"


class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <p className="logo">Port<span>folio</span></p>
                    <Link to= "/">Home</Link>
                    <Link  to = "/aboutme">About me</Link>
                    <Link to= "/contactme">Contact me</Link>
                    <Link to= "/resume">Resume/CV</Link>
                </div>
                <hr></hr>
            </div>
        )
    }
}
export default Header
