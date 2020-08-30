// import moment from 'moment'
// import axios from 'axios'

export default {
    getTrafficImages({time,date}) {
        const timesgt = `${date}T${time}:00+08:00`
        // if(!time) {
        //     moment().format('MMMM Do YYYY, h:mm:ss a')
        //     timesgt = String(moment().format('YYYY-MM-DD[T]HH:mm:ss'))
        // }
        return fetch('https://api.data.gov.sg/v1/transport/traffic-images?date_time=' + encodeURIComponent(timesgt))
            .then(res=>res.json())
    },
    getWeatherForecast({ time, date }) {
        const timesgt = `${date}T${time}:00+08:00`
        return fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=' + encodeURIComponent(timesgt))
            .then(res=>res.json())
    }
}