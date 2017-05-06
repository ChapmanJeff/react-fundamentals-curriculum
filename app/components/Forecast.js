import React, {Component} from 'react'
import Header from './Header'
import Loading from './Loading'
import queryString from 'query-string'
import {getCurrentWeather, get5Day} from '../utils/api'
import PropTypes from 'prop-types'
import {getDate, convertTemp} from '../utils/helpers'
import {Link} from 'react-router-dom'

const DayTile = ({dayWeather})=>{
  console.log('HERE', dayWeather)
  var icon = dayWeather.weather[0].icon;
  var date = getDate(dayWeather.dt)
  return (
    <div className='dayTile'>
      <img alt='weather' src={`./app/images/weather-icons/${icon}.svg`}/>
      <h3>{date}</h3>
    </div>
  )
}

DayTile.propTypes = {
  dayWeather: PropTypes.object.isRequired
}

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      weather5DayList: null,
      currentWeather: null,
      loading: true,
      error: false
    }
  }

  componentDidMount() {
    let query = queryString.parse(this.props.location.search)
    console.log(1, query.city);
    get5Day(query.city).then((weather)=>{
      console.log(weather);
      this.setState(()=>{
        return {
          location: query.city,
          weather5DayList: weather,
          loading: false
        }
      })
    })

  }

  render() {
    let loading = this.state.loading;
    let error = this.state.error;
    let weather5DayList = this.state.weather5DayList;
    let theLocation =this.state.location;


    if (loading) {
      return <Loading />
    }

    if (weather5DayList) {
      return(
        <div className='container'>
          <Header />
          <h1 className='locationHeader'>{theLocation}</h1>
          <div className='dayContainer'>
            {weather5DayList.list.map((item)=>{return(
              <div className='link' key={item.dt}>
                <Link style={{ textDecoration: 'none' }} to={
                  {pathname:`/details`,
                  search:`?city=${theLocation}&date=${item.dt}&temp=${item.temp.day}&icon=${item.weather[0].icon}&desc=${item.weather[0].description}`}
                 }>
                  <DayTile dayWeather={item}/>
                </Link>
              </div>)})
            }
          </div>
        </div>
      )
    }
  }



}


export default Forecast;
