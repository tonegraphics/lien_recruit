import React from 'react';
import Image from '../components/image';
import PropTypes from 'prop-types';
import Styles from '../styles/components/staffCard.module.scss';

// import { Link } from "gatsby"

const StaffCard = ({number, name, job, word, image}) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.info}>
        <div className={Styles.info__top}>
          <h3 className={Styles.number}>#{number}</h3>
          <div>
            <h3>{name}</h3>
            <p>{job}</p>
          </div>
        </div>
        <h3>{word}</h3>
      </div>
      <div className={Styles.image}>
        <Image filename={image} />
      </div>
    </div>
  )
}

StaffCard.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  word: PropTypes.string,
  image: PropTypes.string,
}

StaffCard.defaultProps = {
  number: ``,
  name: ``,
  job: ``,
  word: ``,
  image: ``,
}

export default StaffCard