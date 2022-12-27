import { Link } from 'react-router-dom';

const style = {
  container: 'text-clrWhite mx-auto',
  elementContainer: 'mt-8',
  heading: 'text-clrWhite'
};

const Rules = () => {
  return (
    <div className={style.container}>
      <h6 className={style.heading}>Điều khoản</h6>
      <ul className={style.elementContainer}>
        <li>
          <Link to="/">
            <span className="text-sm">Điều khoản sử dụng</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="text-sm">Quy tắc bảo mật</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Rules;
