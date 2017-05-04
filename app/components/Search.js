import React, {Component} from 'react'

class Search extends Component {
  render(){
    return(
      <div className='search-menu'>
        <input
          className="input"

          type="text" placeholder="St.George, Utah"

        />
        <button
          className='submit'>

            Get Weather
        </button>
      </div>
    )
  }
}

export default Search;
