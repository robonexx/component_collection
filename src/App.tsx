import './App.css';
import ProductTeaser from './components/ProductTeaser/ProductTeaser';
import Button from './components/buttons/teaserButton/CustomButton';

function App() {
  return (
    <>
      <h1>PRODUCT TEASER</h1>
      <ProductTeaser />
      <div className='button-container'>
        <Button title='Click!' bgColor='black'/>
      </div>
    </>
  );
}

export default App;
