import { useState } from 'react';
import { RiArrowDropDownLine, RiShieldKeyholeLine, RiUser3Line } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

const data = [
  {
    label: 'Hồ Sơ',
    path: '',
    features: [
      {
        icon: <RiUser3Line />,
        label: 'Thông tin',
        path: '/user-info',
        state: 'Thông tin cá nhân'
      },
      {
        icon: <RiShieldKeyholeLine />,
        label: 'Thay Đổi mật khẩu',
        path: 'change-password',
        state: 'Thay Đổi mật khẩu'
      }
    ]
  },
  {
    label: 'Giỏ Hàng',
    path: 'cart',
    state: 'Giỏ Hàng'
  },
  {
    label: 'Lịch Sử Đặt Hàng',
    path: 'order-history',
    state: 'Lịch Sử Đặt Hàng'
  }
];

const Sidebar = () => {
  const [selectFeature, setSelectFeature] = useState<any[]>([]);

  const local = useLocation()

  const currentRoute = local.pathname.split("/")[local.pathname.split("/").length - 1]

  const handleSelectFeature = (index: any) => {
    const isExiting = selectFeature.some((_, i) => i === index);
    if (isExiting) setSelectFeature(selectFeature.filter((_, i) => i !== index));
    else setSelectFeature((pre) => [...pre, index]);
  };

  return (
    <div>
      <ul className="py-5">
        {data.map((item, i) => {
          const isHasFeature = item.features;
          return (
            <li key={i}>
              {!item.path ? (
                <div className="flex items-center  px-10   justify-between text-xl py-4">
                  {item?.label}
                  {isHasFeature && (
                    <button
                      onClick={() => handleSelectFeature(i)}
                      className={`text-4xl transition ${
                        selectFeature.includes(i) ? 'rotate-180' : 'rotate-0'
                      }`}>
                      <RiArrowDropDownLine />
                    </button>
                  )}
                </div>
              ) : (
                <NavLink state={item?.state} className={({isActive}) => `flex items-center  px-10   justify-between text-xl py-4  ${isActive ? 'text-clrOrange' : ''}`} to={item?.path}>{item?.label}</NavLink>
              )}

              {isHasFeature && selectFeature.includes(i) && (
                <div className=" bg-white  px-10">
                  {item.features.map((feature, j) => (
                    <NavLink
                      state={feature.state}
                      to={feature.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-4 gap-2 ${currentRoute === feature.path.replace("/",'') ? 'text-clrOrange' : ''}`
                      }
                      key={j}>
                      <span className="">{feature.icon}</span>
                      <span>{feature.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
