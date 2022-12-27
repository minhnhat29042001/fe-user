import { spawn } from 'child_process';
import { useEffect, useState } from 'react';
import { API } from '../../api/endpoint-config';
import useUserSlice from '../../hooks/useUserSlice';

const order = [{
  id: '4b163e4e-0423-464b-b7fe-4851eb831b6b',
  address: 'string',
  phoneNumber: null,
  note: 'string',
  codeCoupon: '',
  totalPrice: 10000,
  status: 'PROCESSED',
  bankcode: null,
  orderProducts: [
    {
      id: '673d91b1-41a6-431c-8c8b-ee1aa429865d',
      note: 'string',
      size: 'string',
      topping: ['string'],
      totalPrice: 39000,
      quantity: 1,
      product: {
        id: '4d06fc42-4f81-4623-a635-1764f8944f48',
        name: 'The Coffee House Sữa Đá',
        imgUrl:
          'http://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a_grande.jpg',
        price: 39000,
        description:
          'Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.'
      }
    },
    {
      id: '673d91b1-41a6-431c-8c8b-ee1aa4298652',
      note: 'string',
      size: 'string',
      topping: ['string'],
      totalPrice: 39000,
      quantity: 1,
      product: {
        id: '4d06fc42-4f81-4623-a635-1764f8944f48',
        name: 'The Coffee House Sữa Đá',
        imgUrl:
          'http://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_e0737a64b29e452f9c7eadb23300821a_grande.jpg',
        price: 39000,
        description:
          'Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.'
      }
    }
  ],
  customerName: 'string'
}];

const OrderHistory = () => {
  const { user } = useUserSlice();

  const [order, setOrder] = useState([])



  const getAsyncListOrder = async () => {
    try {
      const res = await API.get(`/api/v1/orders/${user.id}/get-all`);
      console.log(res)
      const orders = res.data?.content?.map((order: any) => {
        return order.orderProducts.map(({product, ...rest}: any) => ({
          status: order.status,
          ...rest,
          ...product
        }))
      }).flat()
      setOrder(orders)
    } catch (error) {}
  };

  useEffect(() => {
    getAsyncListOrder();
  }, []);



  return (
    <div>
      <div className="">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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
                  Quantity
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  State
                </th>
              </tr>
            </thead>
            <tbody>
              {order.map((product: any) => {
                console.log(product);
                return <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4 w-32">
                    <img src={product.imgUrl} alt="Apple Watch" />
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">{product.quantity}</div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">{product.totalPrice} đ</td>
                  <td className="py-4 px-6">
                    <div
                      className="font-medium text-sm">
                          {product.status === 'PROCESSED' ? <span className='p-2 bg-green-500/60 rounded-2xl text-white'>{product.status} </span> : <span className="p-2 bg-orange-500 rounded-2xl text-white">{product.status}</span>}
                      </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
