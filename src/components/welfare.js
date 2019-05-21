import React from 'react';
import Styles from '../styles/components/welfare.module.scss';
import PropTypes from 'prop-types';
import Image from './image';

const Welfare = ({image, title, body}) => (
  <div className={Styles.welfare}>
    <div className={Styles.image}>
      <Image filename={image} />
    </div>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
)

Welfare.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

Welfare.defaultProps = {
  image: ``,
  title: ``,
  body: ``,
}

export default Welfare