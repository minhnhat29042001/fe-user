/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../component/Card.component';
import Image from '../../component/Image.component';
import ProductionNameWithPrice from '../../component/ProductionNameWithPrice.component';
import { ProductType } from '../../store/product.slice';
const style = {
  container: 'grid grid-cols-4 items-center',
  img: 'rounded-lg m-auto shadow-xl',
  card: 'w-fit h-fit rounded-lg mb-8',
  imgHeight: '75%',
  imgWidth: '75%'
};

const Productions = (props: { data?: any }) => {
  const { productList } = useSelector((state: any) => {
    return {
      productList: state.product.productList as ProductType[]
    };
  });
  const data = props.data ?? productList;
  return (
    <div className={style.container}>
      {data.map((item: ProductType) => {
        return (
          <Link to={`/product/${item.parsedName}`} key={item.id}>
            <Card className={style.card}>
              <>
                <Image
                  src={item.imgUrl}
                  height={style.imgHeight}
                  width={style.imgWidth}
                  className={style.img}>
                  <ProductionNameWithPrice name={item.name} price={item.price} />
                </Image>
              </>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Productions;
