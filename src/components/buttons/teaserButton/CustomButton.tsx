import { RuBtn } from './styled';

type Props = {
  title: string;
  bgColor: string;
};

const CustomButton = ({ title, bgColor }: Props) => (
  <RuBtn bgcolor={bgColor} >
    {title}
  </RuBtn>
);

export default CustomButton;
