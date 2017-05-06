import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import queryString from 'query-string'
import {convertTemp, getDate} from '../utils/helpers'


class DayDetail extends Component {
  render() {
    let {city, date, desc, icon, temp} = queryString.parse(this.props.location.search);
    return(
      <div className='container'>
        <Header />
        <div className='dayTile'>
          <ul>
            <p>{city}</p>
            <img alt='weather' src={`./app/images/weather-icons/${icon}.svg`}/>
            <p>{getDate(date)}</p>
            <p>{desc}</p>
            <p>{`${Math.floor(convertTemp(temp))} Degrees`}</p>
          </ul>
        </div>
      </div>
    )
  }
}


export default DayDetail;
