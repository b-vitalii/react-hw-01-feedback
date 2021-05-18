import React from 'react';
import PropTypes from 'prop-types';
import style from './statistic.module.css';

export default function Statistic({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = `0`,
}) {
  return (
    <ul className={style.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}
Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};