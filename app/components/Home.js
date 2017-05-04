import React, {Component} from 'react';
import Header from './Header'
import Search from './Search.js'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theLocation: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (location) {
    this.setState(()=>{
      console.log(location)
      return {
        theLocation: location
      }
    })

  }

  render() {
    console.log(2, this.state.theLocation)
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
