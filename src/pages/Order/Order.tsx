import { BiIcons } from '../../assets/icons';
import bank from '../../assets/images/bank.png';
import shipper from '../../assets/images/img-deliver.png';
import money from '../../assets/images/realMoney.jpeg';
import './Order.css';
import { useEffect } from 'react';

import { useState } from 'react';
import Modal from './Modal.component';
import ModalNewProduct from './ModalNewProduct.component';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useUserSlice from '../../hooks/useUserSlice';
import Message from '../../component/Common/Message';
import { createOrder } from '../../api/product';

const paymentMethods = [
  {
    name: 'Banking',
    image: bank
  }
];

const bankcode = [
  {
    bank_code: 'VNPAYQR',
    bank_name: 'VNPAY QR',
    logo_link: 'https://sandbox.vnpayment.vn/images/bank/vnpayqr_logo.png',
    bank_type: 5,
    display_order: 22
  },
  {
    bank_code: 'NCB',
    bank_name: 'Ngân hàng NCB',
    logo_link: 'https://sandbox.vnpayment.vn/images/bank/ncb_logo.png',
    bank_type: 1,
    display_order: 12
  }
];

const Order = () => {
  const [order, setOrder] = useState<any>();
  const [selectPayment, setSelectPayment] = useState<string>('banking');

  const local = useLocation();

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      status: 'ORDERED',
      bankcode: '',
      phoneNumber: '',
      customerName: ''
    }
  });

  const { user } = useUserSlice();

  const nav = useNavigate();

  useEffect(() => {
    if (local?.state) {
      setValue('customerName', user?.name);
      setValue('phoneNumber', user?.phone);
    } else nav('/user-info/cart');
  }, [user]);

  const handleOrder = async (data: any) => {
    try {
      const res = await createOrder({ ...data, ...local?.state });
      window.location.replace(res?.data?.content?.data);
    } catch (e: any) {
      alert(`Lỗi: ${e?.response?.data?.errors?.join() || e?.message}`);
    }
  };

  const productsOrder = local?.state?.orderProducts || [];

  const isFreeShipping = local?.state?.totalPrice > 50000;

  return (
    <>
      <form
        onSubmit={handleSubmit(handleOrder)}
        className="md:max-w-[1100px] px-10 m-auto min-h-screen font-sans py-3 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <BiIcons.BiFile size={50} color={'E57905'} />
          <div className="">Xác Nhận Đơn Hàng</div>
        </div>
        <div className="flex items-center gap-10">
          <div className="w-6/12">
            <div className="flex justify-between">
              <div className="font-semibold text-lg">
                <p className="mb-3">Giao Hàng</p>
                <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex">
                <img src={shipper} alt="" className="w-[40px] h-[40px]" />
                <div className="grid ml-4">
                  <div className="flex justify-between items-center border-b border-solid border-zinc-300">
                    <div className="pb-3 pr-2">
                      <div className="font-semibold">{local?.state?.address}</div>
                    </div>
                    <div>
                      <BiIcons.BiArrowFromLeft size={20} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="py-3 pr-2">
                      <div className="font-semibold">Nhận hàng trong ngày 15 - 30 phút</div>
                      <div className="text-sm">Vào lúc: Càng sớm càng tốt</div>
                    </div>
                    <div>
                      <BiIcons.BiArrowFromLeft size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Tên người nhận"
                    {...register('customerName', {
                      required: 'Trường này không được để trống',
                      minLength: {
                        value: 2,
                        message: 'Trường này tối thiểu 6 ký tự'
                      }
                    })}
                    className="w-full h-[44px] border border-solid border-[#ededed] p-[5px_10px] outline-blue-400 mb-3"
                  />
                  <Message message={errors?.customerName?.message} />
                </div>

                <div className="">
                  <input
                    type="number"
                    placeholder="Số điện thoại"
                    {...register('phoneNumber', {
                      required: 'Trường này không được để trống',
                      pattern: {
                        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                        message: 'Hãy nhập đúng định dạng số điện thoại'
                      }
                    })}
                    className="w-full h-[44px] border border-solid border-[#ededed] p-[5px_10px] outline-blue-400 mb-3"
                  />
                  <Message message={errors?.phoneNumber?.message} />
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <p className="mb-2">Phương Thức Thanh Toán</p>
              <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />
              <div className="ml-7">
                {paymentMethods.map((payment, i) => (
                  <div
                    key={i}
                    className="border-b border-solid border-slate-300 py-3 flex items-center">
                    <input
                      onChange={() => setSelectPayment(payment.name)}
                      type="radio"
                      id={`payment-${i}`}
                      className="cursor-pointer"
                      name="money"
                      defaultChecked={payment.name === 'Banking' || false}
                    />
                    <label
                      htmlFor={`payment-${i}`}
                      className="cursor-pointer pl-2 flex items-center">
                      <img src={payment.image} alt="" className="w-[45px] h-[40px] mr-3 ml-1" />
                      {payment.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {selectPayment?.toLowerCase() === 'banking' && (
              <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border my-10">
                <div>
                  <div>Bank List</div>

                  {bankcode.map((item, i) => (
                    <div
                      key={i}
                      className="flex p-2 items-center rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                      <div className="flex items-center h-5">
                        <input
                          id={`bank-${i}`}
                          type="radio"
                          value={item.bank_code}
                          {...register('bankcode')}
                          defaultChecked={true}
                          className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700  dark:bg-gray-600 dark:border-gray-500"
                        />
                      </div>
                      <div className="ml-2 text-sm ">
                        <label
                          htmlFor={`bank-${i}`}
                          className="font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.logo_link}
                              alt=""
                              className="w-14 h-14 object-contain shadow-md"
                            />
                            <span>{item.bank_name}</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <input type="checkbox" id="rule" name="rule" />
              <label htmlFor="rule" className="ml-3">
                Đồng ý với các <span className="text-[#fa8c16]">điều khoản và điều kiện</span> mua
                hàng của The Coffee House
              </label>
            </div>
          </div>
          <div className="w-6/12">
            <div className="shadow-[0px_8px_30px_#DEE6F1] rounded-t-3xl p-[15px_20px]">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-semibold text-lg mb-3">Các món đã chọn</p>
                  <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />
                </div>
                <Link
                  to="/"
                  className="w-[88px] h-[40px] p-[7px_5px] cursor-pointer border border-solid border-[#262626] rounded-3xl text-xs flex text-center items-center justify-center
              ">
                  Thêm món
                </Link>
              </div>

              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  {productsOrder.map((order: any, i: number) => (
                    <li key={i} className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src={order?.product?.imgUrl}
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm  font-medium text-gray-900 truncate dark:text-white">
                            {order?.quantity}x {order?.product?.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {order?.product?.description}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {order?.totalPrice} đ
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-[50px]">
                <p className="font-semibold text-lg mb-3">Tổng Cộng</p>
                <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />

                <div className="flex justify-between border-b border-solid border-[#C4C4C4] mt-[30px] pb-[20px]">
                  <div>Thành tiền</div>
                  <div>{local.state?.totalPrice} đ</div>
                </div>

                <div className="flex justify-between mt-[20px]">
                  <div>Phí giao hàng</div>
                  <div>{isFreeShipping ? '0 đ' : '20.000 đ'}</div>
                </div>

                <div className="flex justify-between border-b border-solid border-[#C4C4C4] mt-[20px] pb-[20px]">
                  {!isFreeShipping ? (
                    <>
                      {' '}
                      <div className="line-through">Miễn phí giao hàng đơn trên 50K</div>
                      <div className="line-through">20.000 đ</div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <div>Miễn phí giao hàng đơn trên 50K</div>
                      <div>20.000 đ</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[#fa8c16] p-[10px_20px] rounded-b-3xl shadow-[0px_8px_30px_#DEE6F1]">
              <div className="flex justify-between mt-[30px] pb-[20px]">
                <div className="grid">
                  <div className="text-sm text-white">Thành tiền</div>
                  <div className="text-sm font-semibold text-white">{local.state?.totalPrice}</div>
                </div>
                <button
                  type="submit"
                  className="w-[132px] h-[48px] cursor-pointer bg-white text-[#fa8c16] p-[6px_24px] flex items-center rounded-[30px]">
                  Đặt Hàng
                </button>
              </div>
            </div>

            <div
              onClick={() =>
                confirm('Bạn có chắc chắn muốn xóa đơn hàng ?') ? nav('/', { replace: true }) : null
              }
              className="text-[#fa8c16] flex items-end justify-center mt-5 cursor-pointer">
              <BiIcons.BiRecycle color={'#fa8c16'} size={30} />
              Xoá đơn hàng
            </div>
          </div>
        </div>
      </form>
      ;
    </>
  );
};

export default Order;
