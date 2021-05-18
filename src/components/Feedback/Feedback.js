import React from 'react';
import PropTypes from 'prop-types';
import style from './feedback.module.css';

export default function Feedback({ feedback }) {
  return (
    <div className={style.btns}>
      <button type="button" className={style.btn} onClick={() => feedback('good')}>Good</button>
      <button type="button" className={style.btn} onClick={() => feedback('neutral')}>Neutral</button>
      <button type="button" className={style.btn} onClick={() => feedback('bad')}>Bad</button>
    </div>
  );
}

Feedback.propTypes = {
    feedback: PropTypes.func.isRequired,
};