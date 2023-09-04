import React from 'react'
import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Fade } from 'react-reveal';

function Projects() {
    return (
        <Container>
            <h1>
            Projects
            </h1>
            <Wrapper>
                <Fade>
                <Wrapp>
                    
                   <img src='../images/disney-plus-shang-chi-1.jpg' alt=""/>
                   
                   <a className='social-container' target="_blank"  href="https://github.com/ouabi1999/desniy-clone">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank"  href="https://disney-clone-one.vercel.app">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                </Fade>
                <Wrapp>
                   <img src='../images/themarketmuckup.png' alt=""/>
                   <a className='social-container' target="_blank"  href="https://github.com/ouabi1999/themarket" >
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank" href="https://themarket.com" >
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='../images/animisprojectonmockup.png' alt=""/>
                   <a className='social-container' target="_blank" href="https://github.com/ouabi1999/animis">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank"  href="https://animis.onrender.com">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
               
                <Wrapp>
                   <img src='../images/stripecheckout.png' alt=""/>
                   <a className='social-container' target="_blank" href="https://github.com/ouabi1999/react-stripe-checkout">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank"  href="https://react-stripe-checkout.onrender.com/">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='../images/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg' alt=""/>
                   <a className='social-container'  href="#">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container'   href="#">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='../images/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg' alt=""/>
                   <a className='social-container'  href="#">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container'  href="#">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
            </Wrapper>
        </Container>
    )
}

export default Projects
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:20px 0;

    h1{
        margin:20px 0;
        border-bottom:4px solid black;
        cursor:pointer;
    }
    h1:hover{
       border-bottom:4px solid #00f3cb;
       transition: 250ms;
   }
`
const Wrapper = styled.div`
     display:flex;
     justify-content:center;
     flex-wrap:wrap;
     gap:15px;
     @media only screen and (max-width: 360px) {
     &{
        padding:10px;
     }
    img{
        width:100%;
    }
}
`
const Wrapp = styled.div`
    padding-bottom:10px;
    background:#aafcff;
    display:flex;
    flex-direction:column;
    border-radius: 6px 6px 0 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .social-container{
        display:flex;
        align-items:center;
        gap:8px;
        padding:5px;
        cursor:pointer;
    }

img{
    width:380px;
    height:250px;
    border-radius: 6px 6px 0 0;


}
@media only screen and (max-width: 360px) {
    
    img{
        width:100%;
    }
}
`
