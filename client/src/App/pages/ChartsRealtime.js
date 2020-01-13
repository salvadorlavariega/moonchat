import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

class ChartsReal extends Component {
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
        const colorsArr = ['#36660a','#eebd27','#2e5063','#b65725','#87ce43','#6cc6e2','#336EFF','#FF33FF','#FF3358','#C3972C'];
        const total = this.state.valuesArr.reduce((a, b) => a + b, 0);
        return(
            <div style={{marginTop:10}}>
            
            <Grid container className={classes.root} spacing={2} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5} >
                        <Grid key={2} item>
                            <Paper className={classes.paper} style={{padding:10}}>
                                <DonutChart value={this.state.valuesArr} colors={colorsArr}/>
                                
                                <Grid container justify="center" spacing={5}>
                               
                                    <Grid item xs={6}>
                                        <Typography component="div">
                                        <Box fontWeight="fontWeightRegular"  style={{color:'#b65725'}}m={1}>
                                            Ingresa una cantidad y despues agregala con el boton, Dinámicamente
                                            la gráfica calculara el porcentaje por cada elemento ingresado, puedes ingresar hasta 10 elementos (por temas de los colores)
                                        </Box>
                                        </Typography>
                                        <Grid container justify="center" spacing={5}>
                                            <Grid item xs={10}>
                                                <TextField id="standard-basic" label="Escribe aquí" onChange={this.updateVal}  value={this.state.donutval}/>  
                                                <Button onClick={this.addToArray} variant="contained" color="primary" disabled={this.state.valuesArr.length>=10}>
                                                    Agregar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={2}>
                                                 {this.state.valuesArr.map((a,index) => 
                                                      <p key={index} style={{color:colorsArr[index]}}>{a} = <span>{Math.round((a*100)/total)}%</span></p>,0)
                                                 }
                                                 
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

  ChartsReal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(ChartsReal);
