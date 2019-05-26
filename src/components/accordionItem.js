import React from 'react';
import '../styles/components/accordion.scss';
import Styles from '../styles/components/accordion.module.scss';

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        table,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordionItem, ${opened && 'accordionItemOpened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordionItem__line' }}>
          <h3 {...{ className: 'accordionItem__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordionItem__icon' }}/>
        </div>
          <div {...{ className: 'accordionItem__inner' }}>
            <div {...{ className: 'accordionItem__content' }}>
              <p {...{ className: 'accordionItem__paragraph' }}>
                {table}
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default AccordionItem