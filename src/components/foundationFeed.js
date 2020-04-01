import React, {Component} from 'react'
import {Grid, Container} from '@material-ui/core'
import FoundationCard from './foundationCard'
import './css/foundationFeed.css'
import {Link} from 'react-router-dom'

class FoundationFeed extends Component {
    constructor(props) {
        super(props);
        this.changeScreen = props.changeScreen;
        this.state = {
            results:[]
        }
    }
    
    componentDidMount(){
        this.fetchData();
        this.troubleShoot();
    }
    fetchData = ()=>{
        
        const url = "http://localhost:3100/inicio";
        return fetch(url,{
            method: "get",
            headers: {"Content-type": "application/json"}},)
            .then(response => response.json())
            
            .then(response => this.setState({results: response.data}))
            .catch(error => console.log(error));
    }
    troubleShoot = ()=>{
        console.log(this.state.results[0])
    }
    render(props) {
        const {results} = this.state
        console.log("aaaaaaaaa",results)
        return(
        <Container className="container" fixed>
          <Grid container>
            <Grid item>
                <Grid className="feed" container spacing={5} alignItems="center" justify="center">
                    <Grid item xs={4}>
                        <Link to="donate" style={{color: "black"}}>
                        <FoundationCard name = {JSON.stringify(results[0])} percent = "100" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lacus cursus, semper ipsum vel, placerat nunc." changeScreen={this.changeScreen}/>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="donate" style={{color: "black"}}><FoundationCard name = "Fundacion Garrahan" changeScreen={this.changeScreen}/></Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="donate" style={{color: "black"}}><FoundationCard name = "Fundacion Garrahan" changeScreen={this.changeScreen}/></Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          <button onClick = {this.troubleShoot}/>
        </Container>  
            
        )
    }
}

export default FoundationFeed
