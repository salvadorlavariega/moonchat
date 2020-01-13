import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";

import DonutChart from '../components/DonutChart';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:'black'
    },
    paper: {
      height: 140,
      maxWidth: 400, 
    },
    control: {
      padding: theme.spacing(2),
    },
}));

class Charts extends Component {
    constructor(props){
      super(props);
      this.state = {
        donutval:'',
        valuesArr:[]
      }
      this.updateVal = this.updateVal.bind(this);
      this.addToArray = this.addToArray.bind(this);
    }

    updateVal(e){
        if(!isNaN(e.target.value)){
            const val = parseInt(e.target.value);
            this.setState({donutval:val})
        }
        
    };

    addToArray(){
        const val = parseInt(this.state.donutval);
        const valuesArr = [...this.state.valuesArr,val];
        this.setState({donutval:'',valuesArr:valuesArr}); 
    }
    
   
    render(){
        const { classes } = this.props;
        const revenue = [80000,120000];
        const revenueColors = ['#36660a','#87ce43'];
        const impresions = [30000000,20000000];
        const impresionsColors = ['#2e5063','#6cc6e2'];
        const visits = [120000000,480000000];
        const visitsColors = ['#b65725','#eebd27'];
        return(
            <div style={{marginTop:10}}>
            
            <Grid container className={classes.root} spacing={2} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5} >
                        <Grid key={1} item >
                        <Paper className={classes.paper} style={{padding:10}}>
                                <DonutChart value={revenue} colors={revenueColors} name="REVENUE" simbol="€"/>
                                <Grid container justify="center" spacing={5}>
                               
                                <Grid item xs={6}   >
                                    <Typography component="div">
                                    <Box fontWeight="fontWeightBold"  style={{color:revenueColors[1]}}m={1}>
                                        Tablet
                                    </Box>
                                    </Typography>
                                    <Grid container justify="center" spacing={5}>
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#464443'}}m={1}>
                                            80%
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#8c8888'}}m={1}>
                                            {revenue[1].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}€
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography component="div">
                                    <Box fontWeight="fontWeightBold"  style={{color:revenueColors[0],textAlign:'right'}}m={1}>
                                        Smarthphone
                                    </Box>
                                    </Typography>
                                    <Grid container justify="center" spacing={5}>
                                    <Grid item xs={4}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#464443'}}m={1}>
                                            20%
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#8c8888'}}m={1}>
                                        {revenue[0].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}€
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.paper} style={{padding:10}}>
                                <DonutChart value={impresions} colors={impresionsColors} name="IMPRESIONS" simbol=""/>
                                 
                                <Grid container justify="center" spacing={5}>
                               
                                <Grid item xs={6}   >
                                    <Typography component="div">
                                    <Box fontWeight="fontWeightBold"  style={{color:impresionsColors[1]}}m={1}>
                                        Tablet
                                    </Box>
                                    </Typography>
                                    <Grid container justify="center" spacing={5}>
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#464443'}}m={1}>
                                            80%
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#8c8888'}}m={1}>
                                            {impresions[1].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography component="div">
                                    <Box fontWeight="fontWeightBold"  style={{color:impresionsColors[0],textAlign:'right'}}m={1}>
                                        Smarthphone
                                    </Box>
                                    </Typography>
                                    <Grid container justify="center" spacing={5}>
                                    <Grid item xs={4}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#464443'}}m={1}>
                                            20%
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#8c8888'}}m={1}>
                                            {impresions[0].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Paper>
                            
                        </Grid>

                        <Grid key={3} item>
                            <Paper className={classes.paper} style={{padding:10}}>
                                <DonutChart value={visits} colors={visitsColors} name="VISITS" simbol=""/>
                                
                                <Grid container justify="center" spacing={5}>
                               
                                <Grid item xs={6}   >
                                    <Typography component="div">
                                    <Box fontWeight="fontWeightBold"  style={{color:visitsColors[1]}}m={1}>
                                        Tablet
                                    </Box>
                                    </Typography>
                                    <Grid container justify="center" spacing={5}>
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#464443'}}m={1}>
                                            80%
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#8c8888'}}m={1}>
                                            {visits[1].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography component="div">
                                    <Box fontWeight="fontWeightBold"  style={{color:visitsColors[0],textAlign:'right'}}m={1}>
                                        Smarthphone
                                    </Box>
                                    </Typography>
                                    <Grid container justify="center" spacing={5}>
                                    <Grid item xs={4}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#464443'}}m={1}>
                                            20%
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#8c8888'}}m={1}>
                                            {visits[0].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                        </Box>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Paper>
                            
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            </div>
        )
    }
  }

Charts.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Charts);
