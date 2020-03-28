import React, {Component} from 'react'
import {Box, Avatar, Grid, ButtonBase} from '@material-ui/core'
import {withStyles} from '@material-ui/styles'
import './css/foundationCard.css'
import {Line} from 'rc-progress'

const styles = theme => ({
    root: {
        width: "12rem",
        height: "12rem",
    },
})

class foundationCard extends Component {
    constructor(props) {
        super(props);
        this.changeScreen = props.changeScreen;
    }


    render(props) {
        const {classes} = this.props;
        return (
            <Box className="cardFoundation" onClick={() => this.changeScreen()}>
                <Grid container direction="row" alignItems="center" justify="center">
                    <Grid item>
                        <Avatar alt="garrahan" className={classes.root} src={ require('./../media/garrahan.jpg')} />
                    </Grid>
                    <Grid item>
                        <p className="cardTitle">Fundacion Garrahan</p>
                    </Grid>
                    <Grid item>
                        <p className="cardDescripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lacus cursus, semper ipsum vel, placerat nunc.</p>
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid container style={{marginTop: "3rem",}} className="progressContainer" direction="row" justify="flex-start">
                        <Grid  item>
                            <div className="barTitle">En progreso</div>
                        </Grid>
                        <Grid className="progressBarContainer" container  spacing={3} justify="center">
                            <Grid item xs={8}>
                                <Line className="cardBar" percent="40" strokeWidth="4" strokeColor="#00D1FF" trailWidth="4"/>
                            </Grid>
                            <Grid item xs={2}>
                                <div className="barTitle">40%</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            
        )
    }
}

export default withStyles(styles)(foundationCard);