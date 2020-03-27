import React, { Component } from 'react'
import {Grid, Container, Box, withStyles, createStyles, Table, TableBody, TableRow, TableCell, Avatar} from '@material-ui/core'
import './css/feed.css'

class Feed extends Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return(
            <Container>
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Box className="cardFeed">
                            <Grid container direction="column" justify="center">
                                <Grid item>
                                    <Grid container justify="center">
                                        <Grid item>
                                            <img className="image" src={require("../media/camillas.jpg")} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <p className="cardTitle">Fundación Garrahan</p>
                                </Grid>
                                <Grid item>
                                    <div className="cardDescripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lacus cursus, semper ipsum vel, placerat nunc.</div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="cardDonate not-start">
                            <Grid container direction="column" justify="center">
                                <Grid item>
                                    <Grid container justify="center">
                                        <Grid item>
                                            <img className="image" src={require("../media/camillas.jpg")} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <p className="cardTitle">Fundación Garrahan</p>
                                </Grid>
                                <Grid item>
                                    <div className="cardDescripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lacus cursus, semper ipsum vel, placerat nunc.</div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    {/* Starting choose foundation Menu*/}
                    {/* <Grid item xs={4}>
                        <Box className="cardDonate chooseFound">
                            
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
        )
    }
}

export default Feed