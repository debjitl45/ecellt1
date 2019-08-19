import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Skills from './skills';
class Resume extends Component{
    render(){
         return(
           <div>
           <Grid>
               <Cell col={6}>
                   <div style={{textAlign:'center'}}>
                       <img src="https://image.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg" alt="avatar" style={{height:'200px'}}></img>
                   </div>
                   <h2 style={{paddingTop:'2em'}}>Debjit</h2>
                   <h2 style={{color:'grey'}}>Programmer</h2>
                   <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                   <p>I like web development.Both frontend and backend.I also do competitive coding.</p>
                   <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                   <h5>Address</h5>
                   <p>Vijaya Homes Green Earth,Jamshedpur</p>
                   <h5>E-mail</h5>
                   <p>karmadebjit@gmail.com</p>
                   <h5>Github</h5>
                   <p>theryuzakil</p>
                   <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
               </Cell>
               <Cell col={6} className="resume-right-col">
                   <h2>Education</h2>
                   <Education/>
                   <hr style={{borderTop:'3px solid #e22947'}} />
                   <Skills/>
               </Cell>
           </Grid>
           </div>
        )
    }
}
export default Resume;