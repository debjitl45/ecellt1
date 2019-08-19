import React, {Component} from 'react';
import {Grid,Cell,Tabs,Tab,Card,CardTitle,CardText,Button,CardActions,CardMenu,IconButton} from 'react-mdl';
class Projects extends Component{
    constructor(props){
        super(props);
            this.state = {activeTab: 0};
    }
    
    toggleCategories(){
        if(this.state.activeTab == 0){
            return(
                <Card shadow={5} style={{minWidth: '450',margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.techspot.com/images2/news/bigimage/2019/06/2019-06-06-image-17.jpg) center / cover'}}>Tetris</CardTitle>
                <CardText>
                 Made a Multiplayer Tetris Game using socketio 
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/theryuzakil/socketio/tree/master/Tetris">View on Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
        }
        if(this.state.activeTab == 1){
            return(
                <Card shadow={5} style={{minWidth: '450',margin:'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://d26a57ydsghvgx.cloudfront.net/content/blog/BlogImage_Chat.jpg) center / cover'}}>Chatter</CardTitle>
                <CardText>
                 Made a chat app
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/theryuzakil/chatter">View on Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
        }
        if(this.state.activeTab == 2){
            return(
                <Card shadow={5} style={{minWidth: '450',margin:'auto',WebkitAlignItems:'center'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}>Splitwise</CardTitle>
                <CardText>
                 Made a bill splitter
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/theryuzakil/walletmanager.github.io">View on Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
        }
        if(this.state.activeTab == 3){
            return(
                <Card shadow={5}  style={{minWidth: '450',margin:'auto',alignContent:'center'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.amazon.jobs/teams/53/images/IMDb_Header_Page.jpg?1501027252) center / cover'}}>ImDB</CardTitle>
                <CardText>
                 Made an ImDB like site
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/theryuzakil/omdb.github.io/tree/master/m">View on Github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
        }
        
    }

    render(){
         return(
           <div>
           <Tabs style={{alignItems:'center'}}   activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
               <Tab className="tabs">Tetris</Tab>
               <Tab className="tabs">Chatter</Tab>
               <Tab className="tabs">Splitwise</Tab>
               <Tab className="tabs">ImDB</Tab>
               <section className="projects-grid">
                   <Grid className="projects-grid">
                       <Cell col={12}>
                           <div className="content" style={{alignItems:'center'}}>{this.toggleCategories()}</div>
                       </Cell>
                   </Grid>
               </section>
           </Tabs>
           </div>
        )
    }
}
export default Projects;