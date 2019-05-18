import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles/components/headline.module.scss';

const Headline = ({title}) => (
  <div className={Styles.headline}>
    <h1>{title}</h1>
  </div>
)

Headline.propTypes = {
  title: PropTypes.string,
}

Headline.defaultProps = {
  title: ``,
}

export default Headline