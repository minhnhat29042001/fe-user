/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BiIcons } from '../../assets/icons';
import { actions } from '../../store';
import Button from '../Button.component';

const className = {
  container: 'absolute top-10 h-auto w-auto min-w-[100px] pt-3',
  optionContainer: 'bg-clrWhite w-full h-full rounded-lg shadow-xl border p-3',
  button: 'block m-1',
  icon: 'inline mr-1'
};

export const BottomAccountOptions = (props: {
  visible: boolean;
  onMouseLeave?: any;
  onMouseEnter: any;
  setLoginFormVisible: any;
}) => {
  const { visible, onMouseLeave, onMouseEnter, setLoginFormVisible } = props;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  });

  const nav = useNavigate()

  const callLogout = () => {
    setLoginFormVisible(false);
    onMouseLeave();
    dispatch(actions.auth.logout());
    nav('/')
  };
  const callOpenLoginForm = () => {
    setLoginFormVisible(true);
  };
  return visible ? (
    <>
      <div className={className.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={className.optionContainer}>
          {!isLoggedIn ? (
            <Button className={className.button} onClick={callOpenLoginForm}>
              <div>
                <BiIcons.BiLogIn className={className.icon} size={20} />
                <span className="text-sm">Đăng nhập</span>
              </div>
            </Button>
          ) : (
            <>
              <Button className={className.button}>
                <Link to="/user-info" state={'Thông tin cá nhân'} className="items-center">
                  <BiIcons.BiUser className={className.icon} size={20} />
                  <span className="text-sm">Thông tin cá nhân</span>
                </Link>
              </Button>
              <Button className={className.button} onClick={callLogout}>
                <div className="items-center">
                  <BiIcons.BiLogOut className={className.icon} size={20} />
                  <span className="text-sm">Đăng xuất</span>
                </div>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
