import React from 'react';
import Styles from '../styles/templates/staff.module.scss';
// import PropTypes from 'prop-types';

const Question = ({number, question, answer}) => (
  <div className={Styles.question_wrapper}>
    <h2 className={Styles.question}>
      <span>{`Q${number}`}</span>{question}
    </h2>
    <p>{answer}</p>
  </div>
)

export default Question