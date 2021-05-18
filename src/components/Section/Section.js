import React from 'react';
import PropTypes from 'prop-types';
import style from './section.module.css';

export default function Section({ title = 'Title', children }) {
  return (
    <div className={style.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};