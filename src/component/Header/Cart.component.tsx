import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FeatherIcons } from '../../assets/icons';
import useUserSlice from '../../hooks/useUserSlice';
import { BottomAccountOptions } from '../Authentication/Bottom-account-options.component';
import { LoginForm } from '../Authentication/Login-form.component';
import Button from '../Button.component';
const style = {
  container: 'flex my-auto',
  iconWrapper: 'p-1 rounded-full border-clrOrange border-2 mx-1'
};
const Cart = () => {
  const [bottomAccountOptionVisible, setBottomAccountOptionVisible] = useState(false);
  const [loginFormVisible, setLoginFormVisible] = useState(false);

  const onMouseLeave = () => {
    setBottomAccountOptionVisible(false);
  };
  const onMouseEnter = () => {
    setBottomAccountOptionVisible(true);
  };

  const { isLoggedIn, user, toggleLogin, setToggleLogin} = useUserSlice()



  return (
    <>
      <div className={style.container}>
        <Link onClick={() => setToggleLogin(true)} className={style.iconWrapper} to="/user-info/cart">
          <FeatherIcons.FiShoppingBag color={'#FC8621'} size={25} />
        </Link>
        <Button
          className={user.avatar ? '' : style.iconWrapper}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {user.avatar ? (
            <img src={user.avatar} width={35} height={35} className={'rounded-full'} />
          ) : (
            <FeatherIcons.FiUser color={'#FC8621'} size={25} />
          )}
        </Button>
        <BottomAccountOptions
          visible={bottomAccountOptionVisible}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          setLoginFormVisible={setToggleLogin}
        />
      </div>
      {!isLoggedIn && (
        <LoginForm visible={toggleLogin} onClose={() => setToggleLogin(false)} />
      )}
    </>
  );
};

export default Cart;
