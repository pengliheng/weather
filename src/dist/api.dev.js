"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// import moment from 'moment'
// import axios from 'axios'
var _default = {
  getTrafficImages: function getTrafficImages(_ref) {
    var time = _ref.time,
        date = _ref.date;
    var timesgt = "".concat(date, "T").concat(time, ":00+08:00"); // if(!time) {
    //     moment().format('MMMM Do YYYY, h:mm:ss a')
    //     timesgt = String(moment().format('YYYY-MM-DD[T]HH:mm:ss'))
    // }

    return fetch('https://api.data.gov.sg/v1/transport/traffic-images?date_time=' + encodeURIComponent(timesgt)).then(function (res) {
      return res.json();
    });
  },
  getWeatherForecast: function getWeatherForecast(_ref2) {
    var time = _ref2.time,
        date = _ref2.date;
    var timesgt = "".concat(date, "T").concat(time, ":00+08:00");
    return fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=' + encodeURIComponent(timesgt)).then(function (res) {
      return res.json();
    });
  }
};
exports["default"] = _default;