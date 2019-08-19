import React , {Component} from 'react';
import {Grid,Cell,Tabs,Tab,Card,CardTitle,CardText,Button,CardActions,CardMenu,IconButton} from 'react-mdl';
class AboutMe extends Component{
constructor(props){
  super(props);
      this.state = {activeTab: 0};
}

toggleCategories(){
  if(this.state.activeTab == 0){
      return(
        <Card shadow={8} style={{width: '640px', height: '640px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(https://static.toiimg.com/thumb/msid-57490896,width-640,resizemode-4,imgsize-217906/57490896.jpg) bottom right 15% no-repeat #46B6AC'}}>PayTM</CardTitle>
        <CardText>
            Paytm's CEO Vijay Sharma one of the well known startups in India.
            Vijay Shekhar Sharma (born 1978) is an Indian billionaire businessman. He is the founder of mobile payments company Paytm.Sharma was ranked as India's youngest billionaire in 2017 by the Forbes with a net worth of $2.1 billion.
        </CardText>
        <CardActions border>
            <Button colored>View Updates</Button>
        </CardActions>
        </Card>
      )
  }
  if(this.state.activeTab == 1){
      return(
        <Card shadow={8} style={{width: '640px', height: '640px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(https://ca-times.brightspotcdn.com/dims4/default/8e446c8/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Ffb%2Fe1%2F06b036ed49d9d8be0642f7f6bb07%2Fla-1556315534-k1zs4grdpv-snap-image) bottom right 15% no-repeat #46B6AC'}}>Tesla</CardTitle>
        <CardText>
        Elon Reeve Musk FRS (born June 28, 1971) is a technology entrepreneur, investor, and engineer.He holds South African, Canadian, and U.S. citizenship and is the founder, CEO, and lead designer of SpaceX;co-founder, CEO, and product architect of Tesla, Inc.;co-founder and CEO of Neuralink; founder of The Boring Company;co-founder and co-chairman of OpenAI;and co-founder of PayPal. In December 2016, he was ranked 21st on the Forbes list of The World's Most Powerful People.He has a net worth of $22.3 billion and is listed by Forbes as the 40th-richest person in the world.
        </CardText>
        <CardActions border>
            <Button colored>View Updates</Button>
        </CardActions>
        </Card>
      )
  }
  if(this.state.activeTab == 2){
      return(
        <Card shadow={8} style={{width: '640px', height: '640px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(https://www.thefamouspeople.com/profiles/images/pierre-omidyar-3.jpg) bottom right 15% no-repeat #46B6AC'}}>eBay</CardTitle>
        <CardText>
            Iranian-American economist Pierre Omidyar is best known as the founder and chairman of eBay, the online auction website.
        </CardText>
        <CardActions border>
            <Button colored>View Updates</Button>
        </CardActions>
        </Card>
      )
  }
  if(this.state.activeTab == 3){
      return(
        <Card shadow={8} style={{width: '640px', height: '640px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-iss492mpkj8bbr8fg1dsq0e9a1-20171127125349.Medi.jpeg) bottom right 15% no-repeat #46B6AC'}}>Flipkart</CardTitle>
        <CardText>
        Flipkart Internet Private Limited is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007, the company initially focused on book sales, before expanding into other product categories such as consumer electronics, fashion, and lifestyle products.

The service competes primarily with Amazon's Indian subsidiary, and the domestic rival Snapdeal.as of March 2017, Flipkart held a 39.5% market share of India's e-commerce industry.Flipkart is significantly dominant in the sale of apparel (a position that was bolstered by its acquisitions of Myntra and Jabong.com), and was described as being "neck and neck" with Amazon in the sale of electronics and mobile phones.Flipkart also owns PhonePe, a mobile payments service based on the Unified Payments Interface (UPI).
        </CardText>
        <CardActions border>
            <Button colored>View Updates</Button>
        </CardActions>
        </Card>
      )
  }
  
}

render(){
   return(
     <div>
     <Tabs style={{alignItems:'center'}}   activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
         <Tab className="tabs">PayTM</Tab>
         <Tab className="tabs">Tesla</Tab>
         <Tab className="tabs">eBay</Tab>
         <Tab className="tabs">Flipkart</Tab>
         <section className="projects-grid">
             <Grid className="projects-grid">
                 <Cell col={12}>
                     <div className="content" style={{alignItems:'center'}}>{this.toggleCategories()}</div>
                 </Cell>
                 <a href="file:///C:/Users/debjit%20karmakar/react/myportfoliosite/src/components/time.html" target="_blank">Time</a>
             </Grid>
         </section>
     </Tabs>
     </div>
  )
}
}


export default AboutMe;