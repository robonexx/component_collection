import { Btn } from './styled';
import ShopIcon from '../../../assets/icons/akar-icons_cart.svg';

// button bg 3DBDA7
// hover radial 3DBDA7 067D71
// color white

const TeaserButton = () => {
  return (
    <Btn>
      <img src={ShopIcon} alt='shopping card svg' />
      <h4>Add to cart</h4>
    </Btn>
  );
};

export default TeaserButton;
