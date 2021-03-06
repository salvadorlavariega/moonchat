import React  from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import avatar_1 from '../../assets/faces/avatar.jpg';
import avatar_2 from '../../assets/faces/camp.jpg';
import avatar_3 from '../../assets/faces/card-profile1-square.jpg';
import avatar_4 from '../../assets/faces/card-profile2-square.jpg';
import avatar_6 from '../../assets/faces/card-profile4-square.jpg';
import avatar_7 from '../../assets/faces/card-profile5-square.jpg';
import avatar_8 from '../../assets/faces/card-profile6-square.jpg';
import avatar_9 from '../../assets/faces/christian.jpg';
import avatar_10 from '../../assets/faces/kendall.jpg';
import avatar_11 from '../../assets/faces/marc.jpg';

const avatares = [avatar_1,avatar_2,avatar_3,avatar_4,avatar_11,avatar_6,avatar_7,avatar_8,avatar_9,avatar_10];

const useStyles = makeStyles(theme => ({
     
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    }
    
  }));

export default function UserOnline(props) {
    const classes = useStyles();
    
  
        return (
            <div>    
                  <Paper className={classes.paper} elevation={0}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar><img alt="avatar" src={avatares[props.aId]} style={{width:"100%"}}></img></Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            
                            <Typography component="div">
                            <Box fontWeight="fontWeightLight" m={1} fontSize={10} >
                            <span>{props.username}</span> {props.message}
                            </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    </Paper>
                 
            </div>
        );
     
   
  
}
