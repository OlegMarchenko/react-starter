import { Application } from '../../styles/global';

function App() {

  const name = 'oleg';

  const arr = [
    {
      id: 1,
      name: 'Oleg'
    },
    {
      id: 2,
      name: 'Misha'
    },
    {
      id: 3,
      name: 'Anna'
    }
  ]

  return (
    <Application>
      <header className="App-header">
        <h1>Hello {name}</h1>
        <ul>
          {
            arr.map(({id, name}) => (
              <li key={id}>{name} має ID: {id}</li>
            ))
          }
        </ul>
      </header>
    </Application>
  );
}

export default App;
