/* eslint-disable no-unused-vars */

import { filter, find } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BiIcons } from '../../assets/icons';
import { productSize, productTopping } from '../../constant/type';
import useUserSlice from '../../hooks/useUserSlice';
import { actions } from '../../store';
import { ProductGroupType, ProductType } from '../../store/product.slice';
import Productions from '../Home/Production.component';
import Option from './Detail.component';
const CurrencyFormat = require('react-currency-format');
const styles = {
  container: 'container px-10 m-auto py-5 min-h-screen font-sans'
};

const ProductDetail = () => {
  let { product } = useParams();
  const [selectedSize, setSelectedSize] = useState(productSize[0].name);
  const [machiato, setMachiato] = useState('');
  const [expresso, setExpresso] = useState('');
  const [caffe, setCaffee] = useState('');
  const [whiteBubble, setWhiteBubble] = useState('');
  const [blackBubble, setBlackBubble] = useState('');
  const [selectedTopping, setSelectedTopping] = useState<any>([]);
  const { productList, productGroup } = useSelector((state: any) => {
    return {
      productList: state.product.productList,
      productGroup: state.product.productGroup
    };
  });
  const productData: ProductType = find(
    productList,
    (item: ProductType) => item.parsedName === product
  );
  const productGroupId: ProductGroupType = find(
    productGroup,
    (item: ProductGroupType) => item.id === productData.productGroup.id
  );
  const relevants = filter(
    productList,
    (item: ProductType) => item.productGroup?.id === productData.productGroup?.id
  ).slice(0, 4);
  console.log(productList, relevants, productData);
  const addToppingList = (item: any) => {
    setSelectedTopping((prevState: any) => [...prevState, item]);
  };
  const removeToppingList = (item: any) => {
    let toppingList = selectedTopping;
    toppingList = toppingList.filter((e: any) => e.id !== item.id);
    setSelectedTopping(toppingList);
  };
  useEffect(() => {
    console.log(selectedTopping);
  }, [selectedTopping]);

  const dispatch = useDispatch();

  const { isLoggedIn, setToggleLogin } = useUserSlice();

  const nav = useNavigate();

  const handleAddToCart = () => {
    if (isLoggedIn) {
      dispatch(
        actions.cart.addToCart({ ...productData, size: selectedSize, topping: selectedTopping })
      );
      console.log(selectedSize, selectedTopping);
      nav('/user-info/cart');
    } else setToggleLogin(true);
  };

  return (
    <div className={styles.container}>
      <div className="flex">
        <Link to="/menu" className="font-bold">
          Menu
        </Link>
        <div className="mx-1">/</div>
        <Link to={`/menu/${productGroupId?.parsedName}`} className="font-bold">
          {productGroupId?.name}
        </Link>
        <div className="mx-1">/</div>
        <Link to={`/product/${product}`} className="">
          {productData?.name}
        </Link>
      </div>
      <div className="flex mt-[35px]">
        <div className="flex-1">
          <img src={productData?.imgUrl} alt="Hình Sản Phẩm" className="w-[570px] h-[570px]" />
        </div>
        <div className="flex-1 pl-8">
          <div className="text-[26px] mb-4">{productData?.name}</div>
          <div className="text-[26px] mb-[18px] text-[#E57905] font-semibold flex">
            <CurrencyFormat
              value={productData?.price}
              thousandSeparator={true}
              displayType={'text'}
              suffix={' VND'}
            />
          </div>
          <button
            type="button"
            onClick={() => handleAddToCart()}
            className="bg-[#E57905] flex rounded-md items-center w-full h-[46px] justify-center py-3 text-white">
            <BiIcons.BiShoppingBag color={'#fff'} className="w-[21px] h-[21px] mr-2 " />
            Đặt giao tận nơi
          </button>
          {productData?.productGroup.name !== 'Bánh mặn' &&
            productData?.productGroup.name !== 'Snack' &&
            productData?.productGroup.name !== 'Thưởng thức tại nhà' &&
            productData?.productGroup.name !== 'Cà phê tại nhà' &&
            productData?.productGroup.name !== 'Bánh ngọt' && (
              <>
                <div className="mt-5">
                  <div className="mb-3">Chọn size (bắt buộc)</div>
                  <div className="flex gap-4">
                    {productSize.map((item) => (
                      <Option
                        sizeImg={25}
                        text={item.name}
                        price={item.value}
                        key={item.id}
                        onClick={() => setSelectedSize(item.name)}
                        isSelected={item.name === selectedSize}
                        showIcon={true}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mb-3">Topping</div>
                  <div className="flex gap-4 flex-wrap">
                    <Option
                      text={productTopping[0].name}
                      price={productTopping[0].value}
                      key={productTopping[0].id}
                      isSelected={productTopping[0].name === machiato}
                      onClick={() => {
                        if (machiato === '') {
                          setMachiato(productTopping[0].name);
                          addToppingList(productTopping[0]);
                        } else {
                          setMachiato('');
                          removeToppingList(productTopping[0]);
                        }
                      }}
                    />
                    <Option
                      text={productTopping[1].name}
                      price={productTopping[1].value}
                      key={productTopping[1].id}
                      isSelected={productTopping[1].name === expresso}
                      onClick={() => {
                        if (expresso === '') {
                          setExpresso(productTopping[1].name);
                          addToppingList(productTopping[1]);
                        } else {
                          setExpresso('');
                          removeToppingList(productTopping[1]);
                        }
                      }}
                    />
                    <Option
                      text={productTopping[2].name}
                      price={productTopping[2].value}
                      key={productTopping[2].id}
                      isSelected={productTopping[2].name === caffe}
                      onClick={() => {
                        if (caffe === '') {
                          setCaffee(productTopping[2].name);
                          addToppingList(productTopping[2]);
                        } else {
                          setCaffee('');
                          removeToppingList(productTopping[2]);
                        }
                      }}
                    />
                    <Option
                      text={productTopping[3].name}
                      price={productTopping[3].value}
                      key={productTopping[3].id}
                      isSelected={productTopping[3].name === whiteBubble}
                      onClick={() => {
                        if (whiteBubble === '') {
                          setWhiteBubble(productTopping[3].name);
                          addToppingList(productTopping[3]);
                        } else {
                          setWhiteBubble('');
                          removeToppingList(productTopping[3]);
                        }
                      }}
                    />

                    <Option
                      text={productTopping[4].name}
                      price={productTopping[4].value}
                      key={productTopping[4].id}
                      isSelected={productTopping[4].name === blackBubble}
                      onClick={() => {
                        if (blackBubble === '') {
                          setBlackBubble(productTopping[4].name);
                          addToppingList(productTopping[4]);
                        } else {
                          setBlackBubble('');
                          removeToppingList(productTopping[4]);
                        }
                      }}
                    />
                  </div>
                </div>
              </>
            )}
        </div>
      </div>

      <div className="mt-[45px] border-t border-t-solid border-[#eee] py-[38px]">
        <div className="font-semibold text-lg mb-2">Mô tả sản phẩm</div>
        <p>{productData.description}</p>
      </div>

      <div className="border-t border-t-solid border-[#eee] py-[38px]">
        <div className="font-semibold text-lg mb-2">Sản phẩm liên quan</div>
        <Productions data={relevants} />
      </div>
    </div>
  );
};

export default ProductDetail;
