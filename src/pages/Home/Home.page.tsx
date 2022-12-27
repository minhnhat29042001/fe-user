import { useSelector } from 'react-redux';
import Productions from './Production.component';
import Slider from './Slider.component';
const style = {
  container: 'container px-10 m-auto py-5'
};
export const Home = () => {
  const productList = useSelector((state: any) => state.product.productList);
  return (
    <div className={style.container}>
      <Slider />
      <Productions data={productList.slice(0, 8)} />
      {/* <MarketingContent /> */}
    </div>
  );
};
