import React, {Component} from 'react'
import {Box, Grid} from '@material-ui/core'
import './css/navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navNames = ["found", "feed", "prop"];
        this.changeScreen = props.changeScreen;
        this.state = {
            colorMenu: {
                found: "#000000",
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
                                <div className="navItem" onClick={() => this.changeScreen("found")}><a style={{color: this.state.colorMenu.found}}>Fundaciones</a></div>
                            </Grid>
                            <Grid item>
                                <div className="navItem" onClick={() => this.changeScreen("feed")}><a style={{color: this.state.colorMenu.feed}}>Feed</a></div>
                            </Grid>
                            <Grid item>
                                <div className="navItem" onClick={() => this.changeScreen("prop")}><a style={{color: this.state.colorMenu.prop}}>Proposito</a></div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Navbar
