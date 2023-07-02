import React from 'react'
import styled from  "styled-components"
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

function AboutMe() {
  return (
    <Container>
      <Fade left>
          <h2>About me</h2>
      </Fade>
      <Fade left>
      <p>
        I am a Full Stack Developer with expertise in React,
        Flask, HTML, CSS, JavaScript, and Python.
        I have experience developing responsive web applications,
        building RESTful APIs, and integrating payment gateways such as Stripe and PayPal.
        I am proficient in Git and have experience working with Agile methodologies.
        I am a team player with excellent communication and problem-solving skills.
      </p>
      </Fade>
      <Wrapper>
      <Fade left>
          <Wrap>

            <DevicesIcon className="icon" />
            <h2>Responsive </h2>
            <span>
              My layouts will work on any device, big or small
            </span>
          </Wrap>
        </Fade>
        <Fade left>
        <Wrap>
          <SpeedIcon className="icon" />
          <h2> Fast </h2>
          <span>
          Fast load times and lag free interaction, my highest priority.          </span>
        </Wrap>
        </Fade>
        <Fade right>
        <Wrap>
          <LightbulbIcon className="icon" />
          <h2>Intuitive </h2>
          <span>
             Strong preference for easy to use, intuitive UX/UI.
          </span>
        </Wrap>
        </Fade>
        <Fade right>

        <Wrap>
          <RocketLaunchIcon className="icon" />
          <h2>Dynamic</h2>
          <span>
              Websites don't have to be static, I love making pages come to life.
          </span>
        </Wrap>
        </Fade>

      </Wrapper>
    </Container>
  )
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
    text-align:center;
    width:60%;
    margin:auto;
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



           
