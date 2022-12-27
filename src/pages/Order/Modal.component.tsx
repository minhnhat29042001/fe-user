import styles from './Modal.module.css';
import './Modal.module.css';
import { AiIcons } from '../../assets/icons';
import coupon1 from '../../assets/images/coupon1.jpeg';
import coupon2 from '../../assets/images/coupon2.jpeg';
import coupon3 from '../../assets/images/coupon3.jpeg';
const Modal = (props: { setIsOpen: any }) => {
  const handleAddCoupon = (event: any) => {
    event.preventDefault();
    //do sth
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Danh sách mã khuyến mãi</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => props.setIsOpen(false)}>
            <AiIcons.AiOutlineClose size={15} className="" />
          </button>
          <div className={styles.modalContent}>
            <div >
              <div className="flex items-center mb-5 gap-3 justify-between">
                <input
                  type="text"
                  placeholder="Nhập mã khuyến mãi"
                  className="w-[70%] border border-solid rounded-xl p-[10px_20px] text-sm outline-none"
                />
                <button className="p-[10px_20px]" onSubmit={handleAddCoupon}>
                  Áp dụng
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
                <img src={coupon1} alt="" className="w-[100px] h-[80px]" />
                <div className="p-[10px_20px] flex flex-col items-start">
                  <p className="text-sm mb-2 text-left">Mua 1 tặng 1 Merry CloudTea</p>
                  <p className="text-[#D2691E] text-sm mb-2">Hết hạn trong 3 ngày</p>
                  <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
                </div>
              </div>

              <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
                <img src={coupon2} alt="" className="w-[100px] h-[80px]" />
                <div className="p-[10px_20px] flex flex-col items-start">
                  <p className="text-sm mb-2 text-left">Mua 1 tặng 1 Merry CloudTea</p>
                  <p className="text-[#D2691E] text-sm mb-2">Hết hạn trong 3 ngày</p>
                  <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
                </div>
              </div>

              <div className="flex items-center gap-8 p-[10px_20px] border border-solid md:w-[400px] shadow-lg rounded-2xl">
                <img src={coupon3} alt="" className="w-[100px] h-[80px]" />
                <div className="p-[10px_20px] flex flex-col items-start">
                  <p className="text-sm mb-2 text-left">GIẢM 35K ĐƠN 169K</p>
                  <p className="text-[#D2691E] text-sm mb-2">Hết hạn trong 3 ngày</p>
                  <p className="text-[#D2691E] cursor-pointer">Sử dụng ngay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
