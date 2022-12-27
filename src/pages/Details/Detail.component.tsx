import { BiIcons } from '../../assets/icons';
const CurrencyFormat = require('react-currency-format');
const className = {
  selected:
    'bg-[#E57905] flex items-center rounded-md border border-solid border-[#E57905] p-[10px_15px] gap-1 text-white',
  unSelected:
    'bg-white flex items-center rounded-md border border-solid border-slate-300 p-[10px_15px] gap-1'
};
const Option = (props: {
  sizeImg?: number;
  text: string;
  price: number;
  showIcon?: boolean;
  isSelected?: boolean;
  onClick?: any;
}) => {
  return (
    <button
      onClick={props.onClick}
      className={props.isSelected ? className.selected : className.unSelected}>
      {props.showIcon && <BiIcons.BiCoffee size={props.sizeImg} />}
      <p>{props.text}</p>
      <p>
        +
        <CurrencyFormat
          value={props.price}
          thousandSeparator={true}
          displayType={'text'}
          suffix={' VND'}
        />
      </p>
    </button>
  );
};

export default Option;
