import React, {Component} from 'react';
import Header from './Header'
import Search from './Search.js'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLocation: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState(()=>{
      return {
        selectedLocation: value
      }
    })
  }

  handleSubmit () {

  }

  render() {
    console.log(this.state.selectedLocation)
    return(
      <div className="container">
        <Header />
        <div className='homeContainer' style={{backgroundImage:"url('app/images/pattern.svg')"}}>
          <h1>Enter a City and State</h1>
          <Search
            handleChange={this.handleChange}
            val={this.state.selectedLocation}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default Home;
