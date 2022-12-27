import coupon1 from '../../assets/images/coupon1.jpeg';
import coupon2 from '../../assets/images/coupon2.jpeg';
import coupon3 from '../../assets/images/coupon3.jpeg';

const Coupon = () => {
  return (
    <div className="container m-auto font-sans pt-3 pb-9">
      <p className="my-3 font-bold text-xl">Danh sách mã khuyến mãi khả dụng</p>
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
          <img src={coupon1} alt="" className="w-[100px] h-[80px]" />
          <div className="p-[10px_20px]">
            <p className="text-sm mb-2">Mua 1 tặng 1 Merry CloudTea</p>
            <p className="text-[#D2691E] text-sm mb-4">Hết hạn trong 3 ngày</p>
            <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
          </div>
        </div>

        <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
          <img src={coupon2} alt="" className="w-[100px] h-[80px]" />
          <div className="p-[10px_20px]">
            <p className="text-sm mb-2">Bánh mì gậy đồng giá 9K khi mua kèm 1 ly nước(M/L)</p>
            <p className="text-[#D2691E] text-sm mb-4">Hết hạn trong 3 ngày</p>
            <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
          </div>
        </div>

        <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
          <img src={coupon2} alt="" className="w-[100px] h-[80px]" />
          <div className="p-[10px_20px]">
            <p className="text-sm mb-2">Bánh mì gậy đồng giá 9K khi mua kèm 1 ly nước(M/L)</p>
            <p className="text-[#D2691E] text-sm mb-4">Hết hạn trong 3 ngày</p>
            <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
          </div>
        </div>

        <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
          <img src={coupon3} alt="" className="w-[100px] h-[80px]" />
          <div className="p-[10px_20px]">
            <p className="text-sm mb-2">GIẢM 35K ĐƠN 169K</p>
            <p className="text-[#D2691E] text-sm mb-4">Hết hạn trong 3 ngày</p>
            <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
