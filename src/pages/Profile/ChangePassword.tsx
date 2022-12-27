import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiIcons } from '../../assets/icons';
const ChangePassword = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="flex w-full">
      <Sidebar>
        <Menu>
          <SubMenu label="Hồ Sơ">
            <MenuItem>
              <Link className="flex items-center gap-2" to="/profile">
                <BiIcons.BiUser />
                Thông tin
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="flex items-center gap-2 text-[#FA8A2A]" to="/change-password">
                <BiIcons.BiLockAlt />
                Thay đổi mật khẩu
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem>
            <Link className="flex items-center gap-2 " to="/cart">
              Giỏ Hàng
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="p-[20px_100px] max-w-[1200px]">
        <p className="text-bold text-xl mb-7">Thay đổi mật khẩu</p>
        <div>
          <form action="">
            <div className="flex flex-wrap items-center gap-5">
              <input
                required
                type="password"
                placeholder="Mật khẩu hiện tại"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-3 outline-none"
              />
              <input
                type="password"
                placeholder="Mật khẩu mới"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-5 outline-none"
              />
              <input
                type="password"
                placeholder="Nhập lại mật khẩu mới"
                className="w-[720px] h-[45px] p-[10px] text-slate-800 text-sm border border-solid border-slate-400 rounded-xl mb-5 outline-none"
              />
            </div>
            <div className="flex mb-7">
              <button
                className="flex items-center justify-end p-[10px_20px] rounded-solid border-transparent rounded-3xl border bg-[#FA8A2A] text-white hover:bg-orange-400"
                onSubmit={handleSubmit}>
                Thay đổi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
