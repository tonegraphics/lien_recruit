import React from 'react';
import Image from '../components/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from '../styles/components/staffCard.module.scss';
import { Link } from "gatsby";

const StaffCard = ({id, number, name, job, word, image}) => {

  let cardClass = classNames(Styles.card);

  if (id % 2 === 0) {
    cardClass = classNames(
      Styles.card,
      Styles.reverse
    );
  }
  
  return (
    <Link to={`interview/${id}`} className={cardClass}>
      <div className={Styles.image}>
        <Image filename={image} />
      </div>
      <div className={Styles.info}>
        <div className={Styles.info__top}>
          <h3 className={Styles.number}>#{number}</h3>
          <div>
            <h3>{name}</h3>
            <p>{job}</p>
          </div>
        </div>
        <h3 className={Styles.word}>{word}</h3>
      </div>
    </Link>
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