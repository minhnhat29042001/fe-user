import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiIcons } from '../../assets/icons';

const Profile = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const { isLoggedIn } = useSelector((state: any) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  });
  return isLoggedIn ? (
    <div className="flex w-full">
      <Sidebar>
        <Menu>
          <SubMenu label="Hồ Sơ">
            <MenuItem>
              <Link className="flex items-center gap-2 text-[#FA8A2A]" to="/profile">
                <BiIcons.BiUser />
                Thông tin
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="flex items-center gap-2 " to="/change-password">
                <BiIcons.BiLockAlt />
                Thay đổi mật khẩu
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/cart">
              Giỏ Hàng
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="p-[20px_100px] max-w-[1200px]">
        <p className="text-bold text-xl mb-7">Thông tin cá nhân</p>
        <div>
          <form action="">
            <div className="flex flex-wrap items-center gap-5">
              <input
                required
                type="text"
                placeholder="Họ"
                className="w-[350px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                required
                type="text"
                placeholder="Tên"
                className="w-[350px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                type="text"
                placeholder="Nickname"
                className="w-[350px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                required
                type="text"
                placeholder="Giới tính"
                className="w-[350px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                required
                type="text"
                placeholder="Ngày/ Tháng/ Năm Sinh"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Số Điện Thoại"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                type="file"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-5 outline-none"
              />
            </div>
            <div className="flex mb-7">
              <button
                className="flex items-center justify-end p-[10px_20px] rounded-solid border-transparent rounded-3xl border bg-[#FA8A2A] text-white hover:bg-orange-400"
                onSubmit={handleSubmit}>
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen px-28 mt-2">
      <h1 className="text-2xl">Vui lòng đăng nhập để tiếp tục</h1>
    </div>
  );
};

export default Profile;
