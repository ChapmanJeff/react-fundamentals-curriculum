import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {getCurrentWeather, get5Day} from '../utils/api'
import {Link} from 'react-router-dom'

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedLocation: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange (event) {
    var value = event.target.value;
    this.setState(()=> {
      return {
        selectedLocation: value
      }
    })
  }

  onSubmit () {
    event.preventDefault();
    getCurrentWeather(this.state.selectedLocation)
      .then((weather)=>{
        this.props.handleSubmit(weather);
      })
    /*this.props.handleSubmit(this.state.selectedLocation)*/
  }

  render(){
    return(
      <div className='search-menu'>
        <input
          className="input"
          value={this.state.selectedLocation}
          type="text" placeholder="St.George, Utah"
          onChange={this.handleChange}
        />
        <Link to={{
          pathname: '/forecast',
          search: `?city=${this.state.selectedLocation}`
        }}
          className='submit'>
            Get Weather
        </Link>
      </div>
    )
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default Search;
