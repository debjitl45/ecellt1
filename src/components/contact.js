import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
         return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2 >Debjit</h2>
                    <hr/>
                    <img src="https://image.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg" alt="avatar-image" style={{height:'250px'}} />
                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Hello! I live in Aquamarine B,room no.166.You can also contact me on whatsapp,FB,instagram</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px'}}><i className="fa fa-whatsapp"></i>1234567890</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px'}}><i className="fa fa-facebook"></i>   debjit karmakar</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px'}}><i className="fa fa-instagram"></i>the_debjit_k</ListItemContent>
                        </ListItem>
                        </List>
                </Cell>
            </Grid>
            </div>
        )
    }
}
export default Contact;