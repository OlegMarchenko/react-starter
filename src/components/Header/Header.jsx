import { HeaderStyled } from '../../styles/header';

function Header({ counter, setCounter }) {

  return (
    <HeaderStyled>
      <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
      <h1>{counter}</h1>
    </HeaderStyled>
  )
}

export default Header;