import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Forecast from './Forecast'
import Header from './Header'
import DayDetail from './Details'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details' component={DayDetail} />
            <Route render={()=>(<h1>Page Does Not Exist</h1>)} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
