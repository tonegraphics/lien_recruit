import React from 'react';
import '../styles/components/accordion.scss';
// import Styles from '../styles/components/accordion.module.scss';

import AccordionItem from './accordionItem';

const Accordion = ({data}) => (
  <div {...{ className: 'wrapper' }}>
    <ul {...{ className: 'accordionList' }}>
      {data.map((data, key) => {
        return (
          <li {...{ className: 'accordionList__item', key }}>
            <AccordionItem {...data} />
          </li>
        )
      })}
    </ul>
  </div>
)

export default Accordion

