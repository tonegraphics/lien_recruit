import React from 'react';
import { Link } from 'gatsby';
import Styles from '../styles/components/content.module.scss';
import PropTypes from 'prop-types';
import Image from './image';

const Content = ({image, title, body, path}) => (
  <Link to={path} className={Styles.content}>
    <div className={Styles.image}>
      <Image filename={image} />
    </div>
    <h3>{title}</h3>
    <p>{body}</p>
  </Link>
)

Content.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

Content.defaultProps = {
  image: ``,
  title: ``,
  body: ``,
  path: ``,
}

export default Content