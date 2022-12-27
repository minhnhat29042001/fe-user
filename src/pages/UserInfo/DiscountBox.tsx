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
    } catch (e: any) {
      alert(`Lỗi: ${e?.response?.data?.errors?.join() || e?.message }`);

    }
  };

  const selectAsnycDiscount = async (discount: any) => {
    try {
      const res = await selectDiscount({code: discount?.code, totalPriceOfOrder: totalPrice });
      setSelectDiscount(res.data.content)
      setOpenDiscount(false);
    } catch (e: any) {
      alert(`Lỗi: ${e?.response?.data?.errors?.join() || e?.message }`);
    }
  };

  useEffect(() => {
    getAsnycDiscount();
  }, []);



  return (
    <div>
      <div className=" bg-white min-w-[600px] ">
        <div className="flex items-center justify-center relative text-slate-800 border-0 border-b-2 p-10">
          <button
            onClick={() => setOpenDiscount((pre: any) => !pre)}
            className="absolute outline-none text-3xl top-1/2 left-[20px] -translate-y-1/2">
            <FaTimes />
          </button>
          <h3 className="text-2xl">Khuyến Mãi</h3>
        </div>


        <div className="px-10  overflow-y-scroll max-h-[500px] py-10  gap-5 grid [grid-auto-rows:1fr] scroll  ">

            {discounts.map((discount: any) => {
              const time = new Date(discount.expirationDay).getTime() - new Date().getTime();
              const effectiveTime = new Date(discount.effectiveDay).getTime() < new Date().getTime();
              return effectiveTime ? (
                <div key={discount.id} className="w-full my-auto">

                  <div className=" flex flex-col   items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img
                      className="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={discount.imageUrl}
                      alt=""
                    />
                    <div className=" justify-between p-4 leading-normal">
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
