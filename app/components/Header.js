import React, {Component} from 'react'
import Search from './Search'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div>
          <h1>Weather App</h1>
        </div>
        <Search handleSubmit={this.props.handleSubmit}/>
      </div>
    )
  }
}

export default Header;
