import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

export default function Home() {
    const[username, setValue] = useState(''); 
    const classes = useStyles();
    return (
    <div  className={classes.root}>
        <Grid container spacing={3} 
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                                <FormControl className={classes.margin}>
                                    <InputLabel>Write your name</InputLabel>
                                    <Input value={username} onChange={e => setValue(e.target.value)}/>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                             
                                <Link to={{
                                    pathname:'./chat',
                                    name:username
                                }}>
                                    <Button  color="primary">
                                        Start to chat
                                    </Button>
                                </Link>
                            
                                    
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>
        </Grid>
        
       
       
        </div>
    );
   
}
 