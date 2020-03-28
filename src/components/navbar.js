import React, {Component} from 'react'
import {Box, Grid} from '@material-ui/core'
import './css/navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navNames = ["foundFeed", "feed", "prop"];
        this.changeScreen = props.changeScreen;
        this.state = {
            colorMenu: {
                foundFeed: "#000000",
                feed: "#787878",
                prop: "#787878", 
            }
        }
    }

    render(props) {
        return(
            <Box className="containerNavbar">
                <Grid container spacing={10}>
                    <Grid item>
                        <div className="navTitle">Convid<span className="ar">Ar</span></div>
                    </Grid>
                    <Grid item>
                        <Grid className="navMenu" container spacing={6}>
                            <Grid item>
                                <div className="navItem" onClick={() => this.changeScreen("foundFeed")}><Link to="/fundacionesFeed" style={{color: this.state.colorMenu.foundFeed}}>Fundaciones</Link></div>
                            </Grid>
                            <Grid item>
                                <div className="navItem" onClick={() => this.changeScreen("feed")}><Link to="/feed" style={{color: this.state.colorMenu.feed}}>Feed</Link></div>
                            </Grid>
                            <Grid item>
                                <div className="navItem" onClick={() => this.changeScreen("prop")}><Link to="/proposito" style={{color: this.state.colorMenu.prop}}>Proposito</Link></div>
                            </Grid>
                            <Grid item>
                                <div className="navItem" onClick={() => this.changeScreen("prop")}><Link to="/proposito" style={{color: this.state.colorMenu.prop}}>¿Sos una fundacion?</Link></div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Navbar
