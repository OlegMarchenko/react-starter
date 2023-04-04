import './Aside.scss'

function Aside() {

  const links = [
    {
      id: 1,
      name: 'Dashboard'
    },
    {
      id: 2,
      name: 'Sales'
    },
    {
      id: 3,
      name: 'Catalog'
    },
    {
      id: 4,
      name: 'Customers'
    }
  ];

  return (
    <aside className='aside'>
      <nav>
        <ul>
          {
            links.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))
          }
        </ul>
      </nav>
    </aside>
  )
}

export default Aside;