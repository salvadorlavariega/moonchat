import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
 

import Message from './message';
 
import UserOnline from './UserOnline';
 
const styles = theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      overflow:'scroll',
    },
    sendContainer:{
        position: 'fixed',
        paddingBottom: '30px',
        overflow:'scroll',
        bottom: 0,
        backgroundColor: 'white',
        maxWidth:'100%',
        width: '100%',
        display: 'flex',
        
      },
       
       
  });
 
class Chat extends Component{
   
    constructor(props) {
        super(props);
        
        this.state = {
            username:this.props.location.name,
            currentMsg:'',
            avatarId: Math.floor(Math.random()*10),
            arrayMessages:[],
            response: false,
            endpoint: "http://localhost:8080"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    componentDidMount() {       
        this.setState({ username:this.props.location.name });
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint,{transports: ['websocket']});
        const newUser =  {
            text:' Is Online',
            avatarId:this.state.avatarId,
            username:this.state.username
        };
        socket.emit('new-user', newUser);

        socket.on('chat-to-user', data => {
            const message =  <Message    message={data.message.text} 
                                        aId={data.message.avatarId} 
                                        key={this.state.arrayMessages.length+1}
                                        itsMe={this.state.username==data.message.username}
                                        username={data.message.username} >
                            </Message>;
            const items = [...this.state.arrayMessages, message];
            this.setState({currentMsg:'', arrayMessages:items}) ;
        })
        socket.on('user-is-online', data => { 
            const message =  <UserOnline    
                                        message={data.text} 
                                        aId={data.avatarId} 
                                        key={this.state.arrayMessages.length+1}
                                        itsMe={this.state.username==data.username}
                                        username={data.username} >
                            </UserOnline>;     
            const items = [...this.state.arrayMessages, message];
            this.setState({currentMsg:'', arrayMessages:items}) ;
        })
    }

    printChatMessage = (data) => {
        const message = <Message message={data.message} key={this.state.arrayMessages.length+1} itsMe={true} ></Message>;     
        const items = [...this.state.arrayMessages, message];
        this.setState({currentMsg:'', arrayMessages:items}) ;
    }
    
    handleClick = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        const message =  {
            text:this.state.currentMsg,
            avatarId:this.state.avatarId,
            username:this.state.username
        };
        socket.emit('send-message', message);
    };

    onChangeValue = event => {
        this.setState({ currentMsg: event.target.value });
    };
    
    render(){
        const { classes } = this.props;
         
        return (
            <div>
            <div className={classes.sendContainer}>    
             <Grid container spacing={3}>
               <Grid item xs={12}>

                   {this.state.arrayMessages}
                     
                   <Paper className={classes.paper}>
                       <Grid   container 
                               wrap="nowrap" 
                               spacing={2}
                               direction="row"
                               justify="flex-end">
       
                           <Grid item xs={9}  >
                               <FormControl fullWidth className={classes.margin} variant="outlined">
                                   <InputLabel  >Write here  </InputLabel>
                                   <OutlinedInput
                                        
                                       value={this.state.currentMsg}
                                       onChange={this.onChangeValue}
                                       labelWidth={60}
                                   />
                               </FormControl>
                           </Grid>
                           <Grid item>
                               <Button style={{height:"100%"}} variant="contained" color="primary" disabled={this.state.currentMsg.trim()==""} onClick={this.handleClick} >
                               Send
                               </Button>
                           </Grid>
                       </Grid>
                       <Grid item xs={2}>
                           
                       </Grid>
                   </Paper>
               </Grid> 
              </Grid>
            
              
           </div>  
           
           </div>
           );
    }
    
  
}
Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);

 