import { Link } from 'react-router-dom';
import { FeatherIcons, Heroicon2 } from '../../assets/icons';

const style = {
  container: 'text-clrWhite mx-auto',
  elementContainer: 'mt-8',
  heading: 'text-clrWhite'
};
const Contact = () => {
  return (
    <div className={style.container}>
      <h6 className={style.heading}>Giới thiệu</h6>
      <ul className={style.elementContainer}>
        <li>
          <Link to="/">
            <span className="text-sm">
              <FeatherIcons.FiPhone className="inline mr-2" size={22} />
              Đặt hàng: 1800 0333
            </span>
          </Link>
        </li>
        <li className="mt-5">
          <Link to="/">
            <Heroicon2.HiOutlineLocationMarker className="inline mr-2" size={22} />
            <span className="text-sm">Liên hệ</span>
            <p className="text-sm mt-3">156 Trần Quang Khải, phường Tân Định, Quận 1, TP. HCM</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
