import React, { Component } from 'react'
import {Grid, Container, Box, withStyles, createStyles, Button} from '@material-ui/core'
import './css/donate.css'
import {Line} from 'rc-progress'
import {Share} from '@material-ui/icons'
import TableDonate from './tableDonate'

const styles = createStyles({
    buttonDonate: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        borderRadius: "25px",
        padding: "1.5rem",
        paddingLeft: "5.7rem",
        paddingRight: "5.7rem",
        fontSize: "20px",
        backgroundColor: "#00D1FF",
        marginTop: "1rem",
        "&:focus": {
            backgroundColor: "#00D1FF",
        },
        "&:hover": {
            backgroundColor: "#00D1FF",
        },
    },
    buttonShare: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        borderRadius: "25px",
        padding: "1.5rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "50px",
        backgroundColor: "#FF9900",
        marginTop: "1rem",
        "&:focus": {
            backgroundColor: "#FF9900",
        },
        "&:hover": {
            backgroundColor: "#FF9900",
        },
    },
    shareIcon: {
        fontSize: 35
    }
})


class Donate extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        const {classes} = this.props;
        return (
            <Container>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10}>
                        <Box className="cardDonate">
                            <Grid container spacing={1} direction="row">
                                <Grid item xs={7}>
                                    <Grid container direction="column" alignItems="flex-start">
                                        <Grid item>
                                            <img className="image" src={require('../media/garrahan.jpg')} />
                                        </Grid>
                                        <Grid item>
                                            <div className="donateTitle">Hospital Garrahan</div>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <div className="cardDescripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lacus cursus, semper ipsum vel, placerat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lacus cursus, semper ipsum vel, placerat nunc.</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item style={{marginTop: "1rem"}} xs={5}>
                                    <Grid container>
                                        <div className="donateBarTitle">En curso</div>
                                    </Grid>
                                    <Grid container justify="center">
                                        <Grid item>
                                            <div className="percentage">40%</div>
                                        </Grid>
                                        <Grid item>
                                            <Line className="donateCardBar" percent="40" strokeWidth="4" strokeColor="#00D1FF" trailWidth="4"/>
                                        </Grid>
                                        <Grid container spacing={5} style={{marginTop: "0.2rem"}}>
                                            <Grid item xs={8}>
                                                <Button className={classes.buttonDonate} variant="contained" color="primary">Donar</Button>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Button className={classes.buttonShare} variant="contained" color="primary"><Share className={classes.shareIcon}/></Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withStyles(styles)(Donate)