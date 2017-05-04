import axios from 'axios'
import {weatherKey} from './config'

module.exports = {
  getCurrentWeather: (city)=>{
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${weatherKey}`)
      .then((results)=> {
        console.log(results.data)
        return results.data;
      })
  },

  get5Day: (city)=>{
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${weatherKey}&cnt=5`)
      .then((results)=> {
        console.log(results.data)
        return results.data;
      })
  },
}
