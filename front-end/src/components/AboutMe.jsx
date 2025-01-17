import React from 'react'
import styled from  "styled-components"
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { motion } from "motion/react"

function AboutMe() {
  return (
    <Container>
      <h2>About me</h2>
     <div style={{margin:"auto", width:"80%"}}>
      <p>
        Passionate Full Stack Web Developer with 4 years of experience
        designing, developing, and deploying scalable, user-centric web
        applications.
        </p>
        <p>Proficient in both front-end and back-end technologies, with
        a strong commitment to creating efficient, clean, and maintainable code.
        </p>
        <p>
        Seeking a dynamic role to leverage my skills in html, css, javaScript,
        python, react js, flask ,django and git/gtihub to drive business success.
        </p>
        </div>
      <Wrapper>
        <Wrap>
          <DevicesIcon className="icon" />
          <h2>Responsive </h2>
          <span>My layouts will work on any device, big or small</span>
        </Wrap>

        <Wrap>
          <SpeedIcon className="icon" />
          <h2> Fast </h2>
          <span>
            Fast load times and lag free interaction, my highest priority.{" "}
          </span>
        </Wrap>

        <Wrap>
          <LightbulbIcon className="icon" />
          <h2>Intuitive </h2>
          <span>Strong preference for easy to use, intuitive UX/UI.</span>
        </Wrap>

        <Wrap>
          <RocketLaunchIcon className="icon" />
          <h2>Dynamic</h2>
          <span>
            Websites don't have to be static, I love making pages come to life.
          </span>
        </Wrap>
      </Wrapper>
    </Container>
  );
}
export default AboutMe
const Container = styled.div`
   h2{
    text-align:center;
    font-weight:bolder;
    border-bottom:4px solid black;
    width:fit-content;
    margin:15px auto;
    cursor:pointer;
   }
   h2:hover{
       border-bottom:4px solid #00f3cb;
       transition: 250ms;
   }

   p{
    
    font-family:Arial, Helvetica, sans-serif;
    line-height:2rem;
    font-size:17px;
   }

`
const Wrapper = styled.div` 
    width:85%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:25px;

    margin:50px auto;

    .icon{
      font-size:80px;
      color:#3ba0ff;
    }

`
const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    span{
      text-align:center;
      max-width:300px;

    }

  
`



           
