import { RuBtn } from './styled';

type Props = {
  title: string;
  icon?: string;
  bgColor: string;
};

const CustomButton = ({ title, bgColor, icon }: Props) => (
  <RuBtn bgcolor={bgColor}>
    {title}
    <img src={icon} alt='icon svg' />
  </RuBtn>
);

export default CustomButton;
