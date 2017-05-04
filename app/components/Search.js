import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

    this.props.handleSubmit(this.state.selectedLocation)
  }

  render(){
    console.log(1, this.state.selectedLocation)
    return(
      <div className='search-menu'>
        <input
          className="input"
          value={this.state.selectedLocation}
          type="text" placeholder="St.George, Utah"
          onChange={this.handleChange}
        />
        <button
          onClick={this.onSubmit}
          className='submit'>
            Get Weather
        </button>
      </div>
    )
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default Search;
