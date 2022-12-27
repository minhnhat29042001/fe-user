import { useState } from 'react';
import { AiIcons, CgIcons } from '../../assets/icons';
import './Modal.module.css';
import styles from './ModalNewProduct.module.css';
const ModalNewProduct = (props: { setIsOpen: any }) => {
  const [qty, setQty] = useState<number>(1);
  const increaseQuantity = () => {
    setQty(qty + 1);
  };
  const decreaseQuantity = () => {
    setQty(qty - 1);
  };

  const [qtyTopping, setQtyTopping] = useState<number>(0);
  const increaseQuantityTopping = () => {
    setQtyTopping(qty + 1);
  };
  const decreaseQuantityTopping = () => {
    setQtyTopping(qty - 1);
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Thêm món mới</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => props.setIsOpen(false)}>
            <AiIcons.AiOutlineClose size={15} className="" />
          </button>
          <div className={styles.modalContent}>
            <div className="flex">
              <img src="" alt="" className="w-[140px] h-[140px] mr-5" />
              <div className="flex flex-col">
                <div className="grid max-h-[140px]">
                  <p className="font-bold text-xl text-left">Tên sản phẩm</p>
                  <div className="text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dolorem.
                    Illum qui accusamus adipisci officiis iste perferendis saepe voluptatibus
                    placeat harum facilis reiciendis sequi, nisi aliquam, minus, totam tempore
                    libero.
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="text-lg">Giá sản phẩm</div>
                  <div className="flex gap-3">
                    {qty >= 1 && (
                      <button onClick={decreaseQuantity} className="mr-1">
                        <AiIcons.AiFillMinusCircle color={'#fa8c16'} size={35} />
                      </button>
                    )}
                    {qty < 1 && (
                      <button onClick={decreaseQuantity} className="mr-1">
                        <AiIcons.AiFillMinusCircle color={'#EDEDED'} size={35} />
                      </button>
                    )}
                    <input
                      min="0"
                      type="number"
                      value={qty}
                      className="w-[30px] outline-none text-center"
                      readOnly
                    />
                    <button onClick={increaseQuantity} className="-ml-[11px]">
                      <AiIcons.AiFillPlusCircle color={'#fa8c16'} size={35} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5 justify-between w-full">
              <div className="h-[42px] w-[52px] border border-r-0 border-solid rounded-l-lg flex items-center justify-center bg-slate-200">
                <CgIcons.CgNotes size={20} />
              </div>
              <input
                type="text"
                placeholder="Ghi chú thêm cho món này"
                className="w-full border border-solid rounded-r-lg p-[10px_20px] text-sm outline-none"
              />
            </div>
          </div>
          <div className="w-full h-[42px] bg-[#EDEDED] text-[#666] flex items-center text-sm font-bold pl-[20px] mb-3">
            <p>CHỌN SIZE (BẮT BUỘC)</p>
          </div>
          <form action="" className="flex justify-around">
            <div className=" py-3 flex items-center">
              <input type="radio" id="large" name="size" />
              <label htmlFor="large" className="pl-2 flex items-center text-black">
                <div className="flex flex-col">
                  <div>Lớn</div>
                  <div>+10.000đ</div>
                </div>
              </label>
            </div>
            <div className=" py-3 flex items-center">
              <input type="radio" id="mid" name="size" />
              <label htmlFor="mid" className="pl-2 flex items-center text-black">
                <div className="flex flex-col">
                  <div>Vừa</div>
                  <div>+6.000đ</div>
                </div>
              </label>
            </div>
            <div className=" py-3 flex items-center">
              <input type="radio" id="small" name="size" />
              <label htmlFor="small" className="pl-2 flex items-center text-black">
                <div className="flex flex-col">
                  <div>Nhỏ</div>
                  <div>+0đ</div>
                </div>
              </label>
            </div>
          </form>
          <div className="w-full h-[42px] bg-[#EDEDED] text-[#666] flex items-center text-sm font-bold pl-[20px] my-3">
            <p>CHỌN TOPPING (TUỲ CHỌN)</p>
          </div>
          <div className="flex items-center justify-between px-5 border-b border-solid border-[#EDEDED] pb-3">
            <div className="flex flex-col">
              <div className="text-sm text-black">kem phô mai</div>
              <div className="font-bold text-black">+ 10.000đ</div>
            </div>
            <div className="flex gap-3">
              {qtyTopping >= 1 && (
                <button onClick={decreaseQuantityTopping} className="mr-1">
                  <AiIcons.AiFillMinusCircle color={'#fa8c16'} size={35} />
                </button>
              )}
              {qtyTopping < 1 && (
                <button onClick={decreaseQuantityTopping} className="mr-1">
                  <AiIcons.AiFillMinusCircle color={'#EDEDED'} size={35} />
                </button>
              )}
              <input
                min="0"
                type="number"
                value={qtyTopping}
                className="w-[30px] outline-none text-center text-black"
                readOnly
              />
              <button onClick={increaseQuantityTopping} className="-ml-[11px]">
                <AiIcons.AiFillPlusCircle color={'#fa8c16'} size={35} />
              </button>
            </div>
          </div>
          <div className="px-[20px] mt-5">
            <div className="w-full h-[48px] font-bold cursor-pointer bg-[#fa8c16] text-white p-[6px_24px] flex items-center justify-center rounded-[30px]">
              + 10.000 - Thêm vào giỏ hàng
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNewProduct;
