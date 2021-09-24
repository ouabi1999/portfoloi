import React, { Component } from 'react'
import "../App.css"
import Header from './Header/Header'

class Home extends Component{
    render(){
      return(
      <div>
          <div className="profile">
            <img src="https://scontent.ffez1-1.fna.fbcdn.net/v/t1.6435-9/81678263_115000230015694_8299947093187887104_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7KZwPvpPlzcAX9ag1dT&_nc_oc=AQkEpc_MCr9_z_pKBqRGxTcNOSxjruRsBDMGYnFGPlU6baUCKJK4gOLGISgkDzVvhNQ&_nc_ht=scontent.ffez1-1.fna&oh=5a1e0b7ab55dab65d5044883aa150864&oe=616CAB1F" alt="profie"/>
            <div className="float">
              <h1>Who Iam?</h1>
              Hi, Thanks for visiting my profile.<br/>
              Are you looking for a website developer?.<br/>
              It's me Samad, an experienced, professional lead Front-End Web developer,<br/>
              PSD2HTML specialist I can build a top-quality, user-friendly, <br/>
              and responsive website using HTML5, CSS3, Bootstrap, JavaScript, ReactJS,
            </div>
          </div>
          <div>
          <h1 style={{marginLeft:"10px", color:"white"}}>Skills:</h1>
          </div>
          <section className="grid-container">
            <div>
              <i class="fab fa-html5"></i>
              HTML
            </div>
            <div>
              <i class="fab fa-css3"></i>
              CSS
            </div>
            <div>
            <i class="fab fa-js"></i>
              JAVASCRIPT
            </div>
            <div>
            <i class="fab fa-bootstrap"></i>
              BOOTSTRAP
            </div>
            <div>
            <i class="fab fa-react"></i>
              REACT
              </div>
            <div>
            <i class="fab fa-git"></i>
              GIT
            </div>
          </section>
          <div className="social">
            <h1>Social Media</h1>
            <a href="#"><i class="fab fa-facebook"></i>Facebook</a>
            <a href="#"><i class="fab fa-twitter"></i>Twiter</a>
            <a href="#"><i class="fab fa-github"></i> Github</a>
            <a href="#"><i class="fab fa-linkedin"></i>Linkedin</a>
          </div>
      </div>
      
      
      )
    }
  }
  
  export default Home
