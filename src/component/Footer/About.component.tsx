import { Link } from 'react-router-dom';

const style = {
  container: 'text-clrWhite mx-auto',
  elementContainer: 'mt-8',
  heading: 'text-clrWhite'
};

const About = () => {
  return (
    <div className={style.container}>
      <h6 className={style.heading}>Giới thiệu</h6>
      <ul className={style.elementContainer}>
        <li>
          <a href="https://thecoffeehouse.com/pages/chuyen-ca-phe-va-tra">
            <span className="text-sm">Về chúng tôi</span>
          </a>
        </li>
        <li>
          <Link to="/menu">
            <span className="text-sm">Sản phẩm</span>
          </Link>
        </li>
        <li>
          <Link to="/list-store">
            <span className="text-sm">Cửa hàng</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
