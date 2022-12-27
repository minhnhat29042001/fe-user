/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductGroupType } from '../../store/product.slice';
import Cart from './Cart.component';
import Logo from './Logo.component';
import NavigationBar from './NavigationBar.component';

// Styling:
const customStyle = {
  header: 'bg-clrWhite w-full h-14  border-b-2 sticky top-0 z-50 ',
  container: 'container px-10 m-auto h-full flex justify-between'
};

const Header = () => {
  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);
  return (
    <header className={customStyle.header}>
      <nav className={customStyle.container}>
        <Logo />
        <NavigationBar setBottomMenuVisible={setBottomMenuVisible} />
        <Cart />
      </nav>
      <BottomMenu visible={bottomMenuVisible} setBottomMenuVisible={setBottomMenuVisible} />
    </header>
  );
};

const BottomMenu = (props: { visible: boolean; setBottomMenuVisible: any }) => {
  const { visible, setBottomMenuVisible } = props;
  const className = ` transition duration-300 w-full ${
    !visible ? 'hidden opacity-0' : ' opacity-80'
  }  absolute top-[3.4rem] bg-clrWhite mx-auto border py-5`;
  const { productGroup } = useSelector((state: any) => {
    return {
      productGroup: state.product.productGroup as ProductGroupType[]
    };
  });
  return (
    <div
      className={className}
      onMouseEnter={() => setBottomMenuVisible(true)}
      onMouseLeave={() => setBottomMenuVisible(false)}>
      <div className="container px-10 m-auto grid grid-cols-8">
        {productGroup.map((item: ProductGroupType, index: number) => (
          <Link
            className="my-2 transition-all duration-500 hover:text-clrOrange hover:underline hover:decoration-dashed hover:underline-offset-5"
            to={`/menu/${item.parsedName}`}
            key={`${item.id}${index}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Header;
