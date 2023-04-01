import { useState } from 'react';
import { Application } from '../../styles/global';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.scss'

function App() {

  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({
    name: 'Igor',
    age: 25
  });

  console.log(user);

  function setForm(e) {
    e.preventDefault();
    console.log(e);
    setUser(prevState => {
      return {
        ...prevState,
        name: e.target[0].value,
        age: e.target[1].value,
      }
    })
  }

  function setName(e) {
    console.log(e);
    setUser(prevState => {
      return {
        ...prevState,
        name: e.target.value,
      }
    })
  }


  return (
    <div className='wrapper'>
      <button onClick={() => setVisible(prevState => !prevState)}>Button</button>
      {visible && <Header counter={counter} setCounter={setCounter} />}

      <div className="wrapper__section">
        <Header counter={counter} setCounter={setCounter} />
        <Footer user={user} />
      </div>

      <form onSubmit={setForm}>
        <input type="text" placeholder='Username' onChange={setName} />
        <input type="number" placeholder='UserAge' />
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
