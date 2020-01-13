import React, { Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Charts from './pages/Charts';
import ChartsReal from './pages/ChartsRealtime'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/chat' component={Chat}/>
          <Route path='/chart' component={Charts}/>
          <Route path='/chart2' component={ChartsReal}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;