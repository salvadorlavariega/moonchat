import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
 import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
 

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../assets/port.jpg';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    root: {
        marginTop: 10,
        flexGrow: 1,
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  }));

export default function Home() {
    const[username, setValue] = useState(''); 
    const classes = useStyles();
    return (
    <div  className={classes.root}>
     
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pruebas Fullstack
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            1.- Recuerda que para iniciar el chat debes haber iniciado el server que se encuentra en esta applicación tabién
            en moonchat/
            con el comando: npm start
            <br></br>
            2.- Tambien puedes ver los ejemplos de graficas en forma de dona dando clic en los enlaces.
            Gracias!
          </Typography>
                        <Grid container spacing={3}>
                        <Grid item xs={8}>
                                <FormControl className={classes.margin}>
                                    <InputLabel>Write your name</InputLabel>
                                    <Input value={username} onChange={e => setValue(e.target.value)}/>
                                </FormControl>
                        </Grid>
                        <Grid item xs={4} style={{marginTop: 'auto', marginBottom: 'auto'}} >
                            <Link to={{
                                    pathname:'./chat',
                                    name:username
                                }}>
                                 START TO CHAT </Link>        
                        </Grid>
                        </Grid>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  color="primary" onClick={()=> window.location.href="./chart"}>
            Donut Chart Example
        </Button> 
        
        <Button  color="primary" onClick={()=> window.location.href="./chart2"}>
            Donut Chart Example 2 (extra)
        </Button> 
      </CardActions>
    </Card>
                             
            
       
       
        </div>
    );
   
}
 