import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiIcons, RiIcons } from '../../assets/icons';
import Message from '../../component/Common/Message';
import useCartSlice from '../../hooks/useCarSlice';
import useUserSlice from '../../hooks/useUserSlice';
import DiscountBox from './DiscountBox';

const Cart = () => {
  const { isLoggedIn } = useSelector((state: any) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  });

  const [discount, setDiscount] = useState<any>();

  const {
    productList,
    totalPrice,
    actions: { inCreaseQty, deCreaseQty, delCartItem, setQuantity, clearCart }
  } = useCartSlice();

  const { user } = useUserSlice();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      address: '',
      note: ''
    }
  });


  const [openDiscount, setOpenDiscount] = useState(false);

  const finalPrice: number = discount
    ? discount?.amountType === 'MONEY'
      ? totalPrice - Number(discount?.discountAmount)
      : totalPrice - Number(discount?.discountAmount) * totalPrice
    : totalPrice;

  const nav = useNavigate();

    console.log(    productList      )

  const handlePayment = (data: any) => {
    if (productList?.length > 0) {
      const newProductList = productList.map(
        ({ totalPrice, quantity, productGroup, size, topping, ...rest }: any) => ({
          totalPrice,
          quantity,
          note: data.node,
          size,
          topping,
          product: {
            ...rest
          }
        })
      );


      nav('/order', {
        state: {
          ...data,
          totalPrice: finalPrice,
          orderProducts: newProductList,
          codeCoupon: discount?.code || ''
        }
      });
    } else alert('Giỏ hàng trống vui lòng thêm sản phẩm vào giỏ hàng');
  };

  useEffect(() => {
    setValue("address", user.address);
  }, [user])

  return isLoggedIn ? (
    <div className="flex w-full">
      {openDiscount && (
        <div className="fixed inset-0 bg-black/30 z-[9999999999999999999999999]">
          <div className="absolute top-1/2 left-1/2 z-[9999999999999999999999999] -translate-x-1/2 -translate-y-1/2">
            <DiscountBox
              setOpenDiscount={setOpenDiscount}
              totalPrice={totalPrice}
              setSelectDiscount={setDiscount}
            />
          </div>
        </div>
      )}

      <div className=" w-full">
        <div className="flex gap-8">
          <div className="overflow-x-auto  shadow-md sm:rounded-lg w-9/12">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Product
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Qty
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {productList?.map((product: any) => (
                  <tr
                    key={product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-32">
                      <img src={product.imgUrl} alt="Apple Watch" />
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => deCreaseQty(product.id)}
                          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                          </svg>
                        </button>
                        <div>
                          <input
                            onChange={(e) => setQuantity(product.id, e.target.value)}
                            type="number"
                            id="first_product"
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={product.quantity}
                            required
                          />
                        </div>
                        <button
                          onClick={() => inCreaseQty(product.id)}
                          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {Number(product.price) * Number(product.quantity)}
                    </td>
                    <td className="py-4 px-6">
                      <a
                        href="#"
                        onClick={() => delCartItem(product.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => {clearCart(), setDiscount(null)}} className="mt-10 ml-10  text-white uppercase p-4 bg-clrOrange/90 focus:bg-clrOrange focus:ring-1 focus:ring-clrOrange hover:bg-clrOrange  rounded-lg">Xóa giỏ Hàng</button>
          </div>

          <form onSubmit={handleSubmit(handlePayment)} className="grid flex-[1] gap-6 w-3/12">
            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[#808089] text-[17px]">Giao tới</p>
                <label htmlFor="change" className="text-blue-500 cursor-pointer">
                  Thay đổi
                </label>
              </div>
              <div className="flex items-center mb-3">
                <p className="font-bold pr-3 border-r-2 border-solid border-slate-300">
                  {user?.name}
                </p>
                <p className="font-bold ml-3">{user?.phone}</p>
              </div>
              <div className="flex items-center">
                <p className="text-[#00AA56] bg-[#EFFEF4] p-[0_6px] border border-solid border-transparent font-black text-sm rounded-3xl">
                  Nhà
                </p>
                <input
                  id={'change'}
                  {...register('address', {
                    required: 'Trường này không được để trống'
                  })}
                  className="ml-2 text-sm  px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-clrOrange focus:outline-none focus:ring-0 focus:border-clrOrange peer text-[#727274]"
                />
              </div>
              <Message message={errors?.address?.message} />
            </div>

            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="flex items-center justify-between mb-6">
                <div className="font-bold text-sm">Khuyến Mãi</div>
                <div className="flex items-center gap-1">
                  <p className="text-[#808089] text-sm ">Chỉ Có thể chọn 1</p>
                  <BiIcons.BiHelpCircle size={20} color={'#808089'} />
                </div>
              </div>
              <div className="flex items-center">
                <RiIcons.RiCoupon3Line size={20} color={'#0D74E4'} />
                <button
                  type="button"
                  onClick={() => setOpenDiscount((pre) => !pre)}
                  className="text-[#0D74E4] text-sm ml-1">
                  Chọn hoặc nhập mã Khuyến Mãi
                </button>
                {discount?.code && (
                  <div className="ml-10 text-white p-2 bg-green-500 rounded-lg">
                    {discount?.code}
                  </div>
                )}
              </div>
            </div>

            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="flex justify-between items-center">
                <div>Tổng tiền</div>
                <div className="text-[#fa8c16] text-2xl flex">
                  <div>{finalPrice}</div>
                  <div className="ml-1">đ</div>
                </div>
              </div>
            </div>

            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="justify-between items-center ">
                <div>Note</div>
                <div className="mt-2">
                  <textarea
                    id="message"
                    rows={4}
                    className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."></textarea>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  Bạn có thể lưu ghi chú của mình để cho cửa hàng biết bạn cần những yêu cầu nào
                  trong sản pẩm ví dụ: sản phẩm cần ít đường...
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="cursor-pointer w-full text-white bg-[#fa8c16] p-[6px_24px] flex items-center rounded-lg justify-center font-extrabold text-lg">
                Đặt Hàng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen px-28 mt-2">
      <h1 className="text-2xl">Vui lòng đăng nhập để tiếp tục</h1>
    </div>
  );
};

export default Cart;
