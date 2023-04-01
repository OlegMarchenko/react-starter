import { FooterStyled } from '../../styles/header';
import './Footer.scss'

function Footer({ user }) {


  return (
    <footer className='footer'>
      <h1>{user.name}: {user.age}</h1>
    </footer>
  )
}

export default Footer;