import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  // 使用 useLocation 来判断当前路径
  const location = useLocation();
  const navigate = useNavigate();

  // 判断当前是否在 Love 页面
  const isInLovePage = location.pathname === '/love';

  // 点击导航项时，如果在 Love 页面，跳转到主页，否则滚动到相应的组件
  const handleNavClick = (event, path) => {
    // 如果是 Love 页面，阻止默认行为并跳转到主页
    if (isInLovePage) {
      event.preventDefault();  // 阻止默认的跳转行为
      navigate('/');  // 跳转到主页
    }
    // 如果不是 Love 页面，继续正常的滚动行为
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <Link to="/" className="text-xl font-bold tracking-wide">Portfolio</Link>

      <ul
        className={`${menu ? "block" : "hidden"
          } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        {/* 使用锚点链接，在 Love 页面时点击这些链接会跳转回主页 */}
        <a href="#About" onClick={(e) => handleNavClick(e, '/#About')}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience" onClick={(e) => handleNavClick(e, '/#Experience')}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects" onClick={(e) => handleNavClick(e, '/#Projects')}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer" onClick={(e) => handleNavClick(e, '/#Footer')}>
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
        <li><Link to="/love">Secret</Link></li> {/* 添加 Love 页面链接 */}
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
