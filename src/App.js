import './App.scss';

// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import NewIn from './components/NewIn/NewIn';
import Bestsellers from './components/bestsellers/Bestsellers';
import Categories from './components/categories/Categories';
import Koiski from './components/koiski/Koiski';
import FooterKoibird from './components/footer/FooterKoibird';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NewIn />
      <Categories />
      <Bestsellers />
      <Koiski />
      <FooterKoibird />
    </div>
  );
}

export default App;
