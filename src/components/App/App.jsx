import Header from '../Header/Header';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import Aside from '../Aside/Aside';
import './App.scss'
import Stats from '../Stats/Stats';


function App() {

  return (
    <div className='wrapper'>
      {window.innerWidth <= 768 ? <HeaderMobile title='Title' avatar='mechanic' /> :
        <Header title='Title' avatar='avatar' />}
      <Aside />
      <Stats />
    </div>
  );
}

export default App;
