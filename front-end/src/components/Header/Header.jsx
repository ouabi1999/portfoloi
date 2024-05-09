import React, { Component } from 'react'
import "./header.css"
import {Link } from "react-router-dom"
import styled from "styled-components"
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Typed from "react-typed"




function Header() {
  return (
      <Container>
          <Wrapp>
              <div className='image-effect'>
              <Pulse>
                  <img className='profile-img' src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216215/myprofile_qkls0r.jpg" alt="profile picture" />
              </Pulse>
              </div>
        <div>
          <h2>
            <Typed
              strings={["Hello, I'm Ouabi Abdessamad."]}
              typeSpeed={120}
              backSpeed={100}
              loop
            />
          </h2>
          <h2>
            <Typed
              strings={[
                "I'm Full-Stack Web Developer."]}
              typeSpeed={120}
              backSpeed={100}
              loop
            />
          </h2>
         
        </div>
      </Wrapp>
      
       <FlaskIcon className="container-icon">
        <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216669/pngwing.com_3_wt17xg.png" alt=""/>
       </FlaskIcon>
       <MaterialUiIcon className="container-icon">
        <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216668/pngwing.com_4_e2j2eq.png" alt=""/>
       </MaterialUiIcon>
       <PostgresIcon className="container-icon">
        <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216677/pngwing.com_5_ihdopd.png" alt=""/>
       </PostgresIcon>
       
       <PythonIcon  className="container-icon">
       <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216675/pngwing.com_6_yyazop.png" alt=""/>

       </PythonIcon>
       <MySqlIcon className="container-icon">
       <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216680/pngwing.com_7_m9z4h8.png" alt=""/>

       </MySqlIcon>
       <VsCodeIcon className="container-icon">
       <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216678/pngwing.com_8_zjicke.png" alt=""/>

       </VsCodeIcon>
       <HtmlIcon className="container-icon">
       <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216678/pngwing.com_9_ktzxvx.png" alt=""/>

       </HtmlIcon>
       <JavaScriotIcon className="container-icon">
            <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216677/pngwing.com_10_zou7wm.png" alt=""/>
       </JavaScriotIcon>
       <CssIcon className="container-icon">
            <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216677/pngwing.com_11_mmkoy0.png" alt=""/>
       </CssIcon>

       <NodeJsIcon className="container-icon">
            <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715224079/django-logo-positive_ruu66s.png" alt=""/>
       </NodeJsIcon>
       <ReactIcon className="container-icon">
            <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216683/pngwing.com_vd7rf8.png" alt=""/>
       </ReactIcon>
       <ReduxIcon className="container-icon">
            <img  className="img1" src="https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216680/pngwing.com_13_e0q7bw.png" alt=""/>
       </ReduxIcon>
    </Container>
  )
}

export default Header

const Container  = styled.div`
    background-image:url("https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715215193/Webbackground_msxaty.png");
    height:585px;
    position:relative;
    
    .profile-img {
        width:290px;
        height:290px;
        object-fit:contain;
        border-radius:50%;
        rotate: 10deg;

        box-shadow: #ececec 0px 2px 4px 0px, #00ffaa 0px 2px 16px 0px;
     }
     .image-effect:hover {
      cursor:pointer;
      transform: rotate(360deg) scale(1);
	    transition: 0.6s ease-in-out;
      }
     padding:10px;
  h2{
    color:#fffdfd;
    padding:3px;
    background:#564affac;
    border-radius:6px;
    
  }
  .container-icon{
    padding:14px;
      
      border-radius:50%;
      background:rgb(255, 255, 255);
      box-shadow: #00ffaa 0px 0px 15px;
      position:absolute;

    .img1{
      width:100%;
      object-fit:contain;
      
     
     }

  }
  @media only screen and (max-width: 800px) {
    .container-icon{
      display:none;
    }
    &{
      display:flex;
      justify-content:center;
      align-items:center;
    }
}

`
const Wrapp  = styled.div`
       display:flex;
       align-items:center;
       flex-wrap:wrap;

       gap:25px;
       @media only screen and (max-width: 800px) {
            &{
              flex-direction:column;
          }
        }
       
`
const FlaskIcon = styled.div`
      width:90px;
      height:90x;
      
      right:5%;
      bottom:10%;
      
      

`
const ReduxIcon = styled.div`
      width:55px;
      height:55px;
      
      right:16%;
      top:45%;
    

`

const ReactIcon = styled.div`
      width:75px;
      height:75px;
      
      right:21%;
      top:2%;
    

`
const CssIcon = styled.div`
      width:55px;
      height:55px;
      right:72%;
      bottom:42%;
      
          
`
const NodeJsIcon = styled.div`
      width:65px;
      height:65px;
      right:38%;
      bottom:80%;
      img{
        width:100%;
        margin-top:10px;
      }
          
`
const MaterialUiIcon = styled.div`
      width:85px;
      height:85px;
      right:35%;
      bottom:45%;   
`
const PostgresIcon = styled.div`
     width:80px;
     height:80px;
     bottom:22%; 
      
`
const PythonIcon = styled.div`
      width:85px;
      height:85px;
      
      right:60%;
      bottom:83%;

`
const MySqlIcon = styled.div`
      width:100px;
      height:100px;
      right:55%;
      bottom:26%;
      


`
const VsCodeIcon = styled.div`
      width:100px;
      height:100px;
      left:90%;
      bottom:75%;
`
const HtmlIcon = styled.div`
      width:75px;
      height:75px;
      right:30%;
      bottom:10%;

`
const JavaScriotIcon = styled.div`
      width:60px;
      height:60px;
      right:80%;
      bottom:10%;
      
      img{
          border-radius:8px;
      }
`

