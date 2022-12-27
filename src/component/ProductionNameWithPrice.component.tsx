const CurrencyFormat = require('react-currency-format');

const style = {
  container: 'pl-12 mt-4'
};
const ProductionNameWithPrice = (props: { name: string; price: number }) => {
  const { name, price } = props;
  return (
    <div className={style.container}>
      <p className="text-sm">{name}</p>
      <p className="font-light mt-1 text-md font-italic truncate">
        <CurrencyFormat value={price} thousandSeparator={true} displayType={'text'} suffix={' đ'} />
      </p>
    </div>
  );
};

export default ProductionNameWithPrice;
