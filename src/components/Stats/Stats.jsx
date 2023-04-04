import { useState } from 'react';
import './Stats.scss'
import DropdownList from '../DropdownList/DropdownList';

function Stats() {

  const [visible, setVisible] = useState(false);


  const stats = [
    {
      id: 1,
      icon: 'blue',
      title: 'text 1',
      value: '15'
    },
    {
      id: 2,
      icon: 'orange',
      title: 'text 2',
      value: '323'
    },
    {
      id: 3,
      icon: 'red',
      title: 'text 3',
      value: '54'
    },
    {
      id: 4,
      icon: 'green',
      title: 'text 4',
      value: '12'
    }
  ];

  return (
    <ul className='stats'>
      {
        stats.map(({ id, icon, title, value }) => (
          <li key={id} onClick={() => setVisible(prevState => !prevState)}>
            <div style={{ width: '50px', height: '50px', backgroundColor: icon }}></div>
            <p>{title}</p>
            <p>{value}</p>
            {visible && <DropdownList />}
          </li>
        ))
      }
    </ul>
  )
}

export default Stats;