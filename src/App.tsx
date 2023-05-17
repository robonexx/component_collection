import './App.css';
import ProductTeaser from './components/ProductTeaser/ProductTeaser';
import Button from './components/buttons/teaserButton/CustomButton';
import HomeIcon from './assets/icons/akar-icons_home.svg';

function App() {
  return (
    <>
      <h1>PRODUCT TEASER</h1>
      <ProductTeaser />
      <div className='button-container'>
        <Button title='Click!' bgColor='black' icon={HomeIcon} />
      </div>
    </>
  );
}

export default App;
