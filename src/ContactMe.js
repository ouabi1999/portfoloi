import React from 'react'
import "./contact.css"
class ContactMe extends React.Component{
    render(){
      return(
        <div>
          <div className="circle"></div>
          <form className="contact">
            <i className="fas fa-envelope"></i>
            <h1> Contact me  </h1>
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea placeholder="Text me"></textarea>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }
  export default ContactMe;