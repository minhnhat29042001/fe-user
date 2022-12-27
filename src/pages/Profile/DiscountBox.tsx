import React, { useEffect, useState } from 'react';
import { getListInfoSales, selectDiscount } from '../../api/product';
import { FaTimes } from 'react-icons/fa';

const DiscountBox = ({
  setOpenDiscount,
  totalPrice,
  setSelectDiscount
}: {
  setOpenDiscount: any;
  totalPrice: number;
  setSelectDiscount: any;
}) => {
  const [discounts, setDiscounts] = useState([]);

  const [errors, setErrors] = useState();

  const getAsnycDiscount = async () => {
    try {
      const res = await getListInfoSales();
      setDiscounts(res.data.content);
    } catch (error: any) {
      setErrors(error?.message);
    }
  };

  const selectAsnycDiscount = async (discount: any) => {
    try {
      const res = await selectDiscount({code: discount?.code, totalPriceOfOrder: totalPrice });
      setSelectDiscount(res.data.content)
      setOpenDiscount(false);
    } catch (error: any) {
      setErrors(error?.message);
    }
  };

  useEffect(() => {
    getAsnycDiscount();
  }, []);



  return (
    <div>
      <div className=" bg-white min-w-[1000px] ">
        <div className="flex items-center justify-center relative text-slate-800 border-0 border-b-2 p-10">
          <button
            onClick={() => setOpenDiscount((pre: any) => !pre)}
            className="absolute outline-none text-3xl top-1/2 left-[20px] -translate-y-1/2">
            <FaTimes />
          </button>
          <h3 className="text-2xl">Khuyến Mãi</h3>
        </div>

        <div className="">
          <div className="flex items-center px-10 py-10">
            <div className="relative w-full flex ">
              <input
                className="block outline-none p-3 w-9/12  text-sm text-gray-900 bg-gray-50 rounded-r-lg  border  border-gray-300 focus:ring-clrOrange focus:border-clrOrange dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Nhập mã giảm giá"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-[10px] w-3/12 p-3  bg-clrOrange h-full z-10  border-2 border-clrOrange text-white ">
                <span>Áp Dụng</span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-10 py-10 overflow-y-scroll   max-h-[670px] ">
          {discounts.map((discount: any) => {
            const time = new Date(discount.expirationDay).getTime() - new Date().getTime();
            const effectiveTime = new Date(discount.effectiveDay).getTime() < new Date().getTime();
            return effectiveTime ? (
              <div key={discount.id} className="w-full">
                <div className="  min-h-[100px] flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={discount.imageUrl}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {discount.description}
                    </h5>
                    <p className="mb-3 font-normal  dark:text-gray-400 text-orange-400 ">
                      {time <= 0
                        ? 'Mã đã hết hạn'
                        : `Mã hết hạn trong ${Math.round(Math.abs(time) / (1000 * 60 * 60))} ngày`}
                    </p>
                    {time > 0 && (
                      <button
                        onClick={() => selectAsnycDiscount(discount)}
                        className="text-white px-2 py-2 rounded-lg bg-orange-500/70 transition-all hover:bg-orange-500 cursor-pointer">
                        Sử dụng ngay
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default DiscountBox;
