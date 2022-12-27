/* eslint-disable no-unused-vars */
import { filter, find } from 'lodash';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GameIcons } from '../../assets/icons';
import { ProductMenu } from '../../constant/type';
import { ProductGroupType, ProductType } from '../../store/product.slice';
import { getProductGroup } from '../../utils/redux-utils';
import Productions from '../Home/Production.component';
const styles = {
  container: 'container px-10 m-auto py-5 flex flex-row min-h-screen',
  leftIndicator: 'p-4 w-[20%]',
  rightBanner: 'p-4 w-[80%]'
};

export const indicatorNameTranslate: ProductGroupType[] = getProductGroup();

const Menu = () => {
  let { category } = useParams();
  const { productList, productGroup } = useSelector((state: any) => {
    return {
      productList: state.product.productList as ProductType[],
      productGroup: state.product.productGroup as ProductGroupType[]
    };
  });
  const indicatorIndex = category ?? ProductMenu.ALL;
  const categoryId = find(productGroup, (item: ProductGroupType) => item?.parsedName === category);
  console.log(categoryId);



  const data =
    indicatorIndex === ProductMenu.ALL
      ? productList
      : filter(productList, (item: ProductType) => item?.productGroup?.id === categoryId?.id);

  return (
    <div className={styles.container}>
      <div className={styles.leftIndicator}>
        <div className="sticky top-20">
          {productGroup.map((item: ProductGroupType, index: number) => (
            <IndicatorItem
              title={item.name}
              key={index}
              isSelected={categoryId?.id === item.id}
              param={item.parsedName}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightBanner}>
        <Productions data={data} />
      </div>
    </div>
  );
};

const IndicatorItem = (props: { title: string; isSelected?: boolean; param?: string }) => {
  const { title, isSelected, param } = props;
  return (
    <Link to={`/menu/${param}`} className="flex flex-row  items-center py-2">
      <div className="w-1/6 h-full">
        {isSelected && <GameIcons.GiCoffeeBeans className="mx-auto" size={12} fill={'#FC8621'} />}
      </div>
      <div
        className={`block transition-all duration-300 ${
          isSelected ? 'text-clrOrange text-md font-bold' : 'text-sm'
        }`}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Menu;
