import React from 'react'
import styled from "styled-components"
import CircularProgress from '@mui/material/CircularProgress';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Pulse from 'react-reveal/Pulse'





function Skills() {
  return (
    <Container>
        <Fade left>
        <Wrapper>
            <span className="header-name">Front-end</span>
          <Wrapp>

              <span>HTML</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={90} />
              <span>90%</span>

          </Wrapp>
          <Wrapp>

              <span>CSS</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={85} />
              <span>85%</span>
              
          </Wrapp>
          <Wrapp>

              <span>JavaScript</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={80} />
              <span>80%</span>
              
          </Wrapp>
          <Wrapp>

              <span>ReactJs</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={87} />
              <span>87%</span>
              
          </Wrapp>
          <Wrapp>

              <span>Redux Toolkit</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={70} />
              <span>70%</span>

          </Wrapp>
          <Wrapp>

              <span>Material ui</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={65} />
              <span>65%</span>

          </Wrapp>
          </Wrapper>
          </Fade>
          
          <Pulse>
          <Wrapper>
            <span className="header-name">Back-end</span>
          <Wrapp>

              <span>Python</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={70} />
              <span>70%</span>

          </Wrapp>
          <Wrapp>

              <span>Flask</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={87} />
              <span>87%</span>
              
          </Wrapp>
          <Wrapp>

              <span>MySql</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={85} />
              <span>85%</span>
              
          </Wrapp>
          <Wrapp>

              <span>PostgresSQL</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={85} />
              <span>85%</span>
              
          </Wrapp>
          <Wrapp>

              <span>Flask-sqlalchemy</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={85} />
              <span>85%</span>

          </Wrapp>
          <Wrapp>

              <span>SocketIo</span>
              <CircularProgress thickness={5}  className='circle-progress' variant="determinate" value={90} />
              <span>90%</span>

          </Wrapp>
          </Wrapper>
          </Pulse>
          <Fade right>

          <Wrapper>
            <span className="header-name">Other</span>
            <Wrapp>

              <span>Git & Github</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={70} />
              <span>85%</span>

          </Wrapp>
          <Wrapp>

              <span>Heroku</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={80} />
              <span>80%</span>

          </Wrapp>
          <Wrapp>

              <span>DigitalOcean</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={85} />
              <span>85%</span>
              
          </Wrapp>
          <Wrapp>

              <span>Netlify</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={75} />
              <span>75%</span>
              
          </Wrapp>
          <Wrapp>

              <span> Adobe Photoshop</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={70} />
              <span>70%</span>
              
          </Wrapp>
          <Wrapp>

              <span>Adobe Illustrator</span>
              <CircularProgress thickness={5} className='circle-progress' variant="determinate" value={75} />
              <span>75%</span>

          </Wrapp>
          
          
          </Wrapper>
          </Fade>

    </Container>
  )
}

export default Skills
const Container = styled.div`
 
     margin:auto;
     padding:10px;
     display:flex;
     justify-content:space-around;
     flex-wrap:wrap;
     gap:15px;

    h3{
        text-align:center;
    }
` 
 const Wrapp = styled.div`
         display:flex;
         align-items:center;
         gap:15px;
         .circle-progress{
            color:#ad9406;
            margin:5px 0;
            
         }
         span{
            width:120px;
         }
 `
 const Wrapper = styled.div`
       background:#00ffdd7a;
       border-radius:6px;
       display:flex;
       width:fit-content;
       padding:5px 10px;
       flex-direction:column;
       box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
       .header-name{
        font-size:20px;
        font-weight:900;
        text-align:center;
        margin:10px 0;
       }

 `
