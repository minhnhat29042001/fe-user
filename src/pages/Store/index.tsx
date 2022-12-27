import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { city } from '../../constant/temp-data';

import { useEffect, useState } from 'react';
import { BiIcons } from '../../assets/icons';

const ListStore = () => {
  const [data, setData] = useState(city[0]);
  const [isSelected, setIsSeleted] = useState(0);
  const [listStore, setListStore] = useState(data.provinces);

  const handleCity = (index: number) => {
    setIsSeleted(index);
  };
  useEffect(() => {
    setData(city[isSelected]);
  }, [isSelected]);
  useEffect(() => {
    setListStore(data.provinces);
  }, [data]);
  const handleChangeProvinces = (target: any) => {
    const value = target.target.value;
    const filterPro = data.provinces.filter((item) => item.id === value);
    setListStore(filterPro);
  };

  return (
    <>
      <div className="bg-bgStore p-[10px_20px] h-[205px] flex items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          Hệ thống cửa hàng The Coffee House toàn quốc
        </p>
      </div>
      <div className="md:max-w-[1200px] p-[20px_10px] m-auto flex">
        <div className="flex flex-col flex-3 border-r-2 border-solid border-[#00000026] pr-7">
          <p className="font-semibold mb-3">Theo khu vực</p>
          {city.map((item, index) => (
            <div
              className={
                isSelected == index
                  ? 'flex mb-5 cursor-pointer text-[#fa8c16]'
                  : 'flex mb-5 cursor-pointer'
              }
              key={index}
              onClick={() => handleCity(index)}>
              <p className="mr-1">{item.name}</p>
              <p className="">({item.count})</p>
            </div>
          ))}
        </div>
        <div className="flex-1 pl-7">
          <p className="text-[20px] font-semibold mb-5">
            Khám phá {data.count} cửa hàng của chúng tôi ở {data.name}
          </p>
          <select
            onChange={handleChangeProvinces}
            className="w-[280px] h-[40px] p-[7px_10px] border border-solid border-[#00000026] rounded-xl mb-7">
            {data.provinces.map((p: any) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-[80px]">
            {listStore.map((item) =>
              item.address.map((i, index) => (
                <div key={index} className="md:max-w-[430px]">
                  <img src={i.images.src} alt="" className="w-[430px] h-[236px]" />
                  <p className="text-xl font-semibold my-2">{i.name}</p>

                  <p className="text-sm mb-2">{i.add}</p>
                  <p className="text-sm mb-2">7:00 - 22:00</p>
                  <div className="flex gap-3 flex-wrap">
                    <div className="flex gap-2 items-center text-sm">
                      <BiIcons.BiCar size={20} />
                      Có chỗ đỗ xe hơi
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                      <BiIcons.BiHome size={20} />
                      Phục vụ tại chỗ
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                      <BiIcons.BiShoppingBag size={20} />
                      Mua mang đi
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListStore;
