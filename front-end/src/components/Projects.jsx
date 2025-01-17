import React from 'react'
import styled from "styled-components"
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
    return (
        <Container>
            <h1>
            Projects
            </h1>
            <Wrapper>
                <Wrapp>
                    
                   <img src='https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715216249/disney-plus-shang-chi-1_dl2d8x.jpg' alt=""/>
                   
                   <a className='social-container' target="_blank"   rel="noreferrer" href="https://github.com/ouabi1999/desniy-clone">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank"   rel="noreferrer" href="https://disney-clone-one.vercel.app">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715221533/the_market_muckup_new_upugea.png' alt=""/>
                   <a className='social-container' target="_blank"   rel="noreferrer" href="https://github.com/ouabi1999/themarket" >
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank"  rel="noreferrer" href="https://themarket.com" >
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715223064/animisprojectonmnew_wtleog.png' alt=""/>
                   <a className='social-container' target="_blank"  rel="noreferrer" href="https://github.com/ouabi1999/animis">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="blank"   rel="noreferrer" href="https://animis.shop">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
               
                <Wrapp>
                   <img src='https://res.cloudinary.com/dzpzy1o1y/image/upload/v1715222472/stripechenew_fz1mhx.png' alt=""/>
                   <a className='social-container' target="_blank"  rel="noreferrer" href="https://github.com/ouabi1999/react-stripe-checkout">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container' target="_blank"   rel="noreferrer" href="https://react-stripe-checkout.onrender.com/">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='https://res.cloudinary.com/dzpzy1o1y/image/upload/v1736542250/emouza_gzned6.png' alt=""/>
                   <a className='social-container'   rel="noreferrer" href="https://github.com/ouabi1999/enouza">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   </a>
                   <a className='social-container'    rel="noreferrer" href="https://www.enouza.com/">
                   <LanguageIcon className='social=icon'/>
                   <span>Live Link</span>
                   
                   </a>
                </Wrapp>
                <Wrapp>
                   <img src='https://res.cloudinary.com/dkzrl9nlf/image/upload/v1715827292/to_do_list_pictore_srmgkc.png' alt=""/>
                   <a className='social-container'   rel="noreferrer" href="https://github.com/ouabi1999/To-Do-List">
                   <GitHubIcon className='social=icon'/>
                   <span>Source code</span>
                   
                   
                   </a>
                   <a className='social-container'   rel="noreferrer" href="https://to-do-list-1-gzr3.onrender.com/">
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
       border-bottom:4px solid #f8aeff;
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
    background:#d4a6ff;
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
    object-fit:cover;
    border-radius: 6px 6px 0 0;


}
@media only screen and (max-width: 360px) {
    
    img{
        width:100%;
    }
}
`
