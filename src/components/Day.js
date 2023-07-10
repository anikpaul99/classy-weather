import React from "react";
import { getWeatherIcon, formatDay } from "../data.js";

/**
 * Each Day component in 'Dates' array from 'this.props.weather' object
 * @prop {string} date each date in the dates array from 'this.props.weather' object
 * @prop {number} max each maximum temperature in max array from 'this.props.weather' object
 * @prop {number} min each minimum temperature in min array from 'this.props.weather' object
 * @prop {number} code each weather code in codes array from 'this.props.weather' object
 * @prop {boolean} isToday whether it is today or not
 * @returns {JSX.Element}
 * @author Anik Paul
 */

export default class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;

    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
