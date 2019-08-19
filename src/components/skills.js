import React,{Component} from 'react';
import { Grid,Cell,ProgressBar } from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Grid>
            <Cell col={12}>
                <h2>Skills</h2>
                <div style={{display:'flex',color:'yellow'}}>HTML<ProgressBar style={{margin:'auto',width:'75%'}} progress={95}/></div>
                <div style={{display:'flex',color:'yellow'}}>PHP<ProgressBar style={{margin:'auto',width:'75%'}} progress={80}/></div>
                <div style={{display:'flex',color:'yellow'}}>Javascript<ProgressBar style={{margin:'auto',width:'75%'}} progress={90}/></div>
                <div style={{display:'flex',color:'yellow'}}>C/C++<ProgressBar style={{margin:'auto',width:'75%'}} progress={90}/></div>
                <div style={{display:'flex',color:'yellow'}}>React<ProgressBar style={{margin:'auto',width:'75%'}} progress={30}/></div>
                <div style={{display:'flex',color:'yellow'}}>NodeJS<ProgressBar style={{margin:'auto',width:'75%'}} progress={40}/></div>
            </Cell>
            </Grid>
        )
    }

}
export default Skills;