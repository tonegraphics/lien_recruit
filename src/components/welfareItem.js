import React from 'react';
import Styles from '../styles/components/welfareItem.module.scss';
import PropTypes from 'prop-types';
import Image from './image';

const WelfareItem = ({image, title, body}) => (
  <div className={Styles.welfare}>
    <div className={Styles.image}>
      <Image filename={image} />
    </div>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
)

WelfareItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

WelfareItem.defaultProps = {
  image: ``,
  title: ``,
  body: ``,
}

export default WelfareItem