import React, {Component} from 'react';
import Header from './Header'
import Search from './Search.js'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (weather) {
    this.setState(()=>{
      return {
        currentWeather: weather
      }
    })
  }

  render() {
    return(
      <div className="container">
        <Header handleSubmit={this.handleSubmit} />
        <div className='homeContainer' style={{backgroundImage:"url('app/images/pattern.svg')"}}>
          <h1>Enter a City and State</h1>
          <Search
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default Home;
