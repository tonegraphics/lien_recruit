import React from 'react';
import Styles from '../styles/components/content.module.scss';
import PropTypes from 'prop-types';
import Image from './image';

const Content = ({image, title, body}) => (
  <div className={Styles.content}>
    <div className={Styles.image}>
      <Image filename={image} />
    </div>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
)

Content.protoType = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
}

Content.defaultProps = {
  image: ``,
  title: ``,
  body: ``,
}

export default Content