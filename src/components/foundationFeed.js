import React, {Component} from 'react'
import {Grid, Container} from '@material-ui/core'
import FoundationCard from './foundationCard'
import './css/foundationFeed.css'
import {Link} from 'react-router-dom'

class FoundationFeed extends Component {
    constructor(props) {
        super(props);
        this.changeScreen = props.changeScreen;
    }

    render(props) {
        return(
        <Container className="container" fixed>
          <Grid container>
            <Grid item>
                <Grid className="feed" container spacing={5} alignItems="center" justify="center">
                    <Grid item xs={4}>
                        <Link to="donate" style={{color: "black"}}><FoundationCard changeScreen={this.changeScreen}/></Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="donate" style={{color: "black"}}><FoundationCard changeScreen={this.changeScreen}/></Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="donate" style={{color: "black"}}><FoundationCard changeScreen={this.changeScreen}/></Link>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Container>  
            
        )
    }
}

export default FoundationFeed
