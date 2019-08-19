import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class LandingPage extends Component{
    render(){
         return(
           <div style={{width: '100%', margin: 'auto'}}>
           <Grid className="landing-grid">
               <Cell col={12}>
                   <img src="https://avatarfiles.alphacoders.com/123/123468.png" 
                   alt="avatar"
                   className="avatar-img"
                   />
                   <div className="banner-text">
                       <h1>Full Stack Developer</h1>
                       <hr/>
                       <p>HTML|CSS|JAVASCRIPT|REACT|PHP|NODEJS</p>
                       <div className="social-links">
                           <a href="www.github.com/theryuzakil"><i class="fa fa-github" aria-hidden="true"></i></a>
                           <a href="www.google.com"><i class="fa fa-google" aria-hidden="true"></i></a>
                           <a href="www.instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                       </div>
                   </div>
                   
               </Cell>
           </Grid>
           </div>
        )
    }
}
export default LandingPage;