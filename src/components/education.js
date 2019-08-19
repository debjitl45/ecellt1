import React,{Component} from 'react';
import { Grid,Cell } from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
            <Cell col={4}>
                <p>2015-2017</p>
                <p style={{marginTop:'8px'}}>2018-2022</p>
            </Cell>
            <Cell col={8}>
            <h4 style={{marginTop:'3px',color:'yellow'}}>DAV Public School Bistupur</h4>
            <h4 style={{marginTop:'8px',color:'green'}}>NIT Trichy</h4>
            </Cell>
            </Grid>
        )
    }

}
export default Education;