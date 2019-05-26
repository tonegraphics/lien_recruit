import React from 'react';
import '../styles/components/accordion.scss';
import AccordionItem from './accordionItem';

// const Accordion = ({table, title}) => {
//   state = {
//     opened: false
//   }

//   render () {
//     const {
//       props: {
//         table,
//         title
//       },
//       state: {
//         opened
//       }
//     } = this

//     return (
//       <div>
  
//       </div>
//     )
//   }
  
// }



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

// class Accordion extends React.Component {
//   render () {
//     return (
//       <div {...{ className: 'wrapper' }}>
//         <ul {...{ className: 'accordionList' }}>
//           {data.map((data, key) => {
//             return (
//               <li {...{ className: 'accordionList__item', key }}>
//                 <AccordionItem {...data} />
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Accordion />, document.getElementById('app'));

export default Accordion

