import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;