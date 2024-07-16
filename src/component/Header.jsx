import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="container flex justify-between w-[70%] pb-3 items-center border-b">
          <Link to="/">
            <div className="left flex ml-2 mt-5">
              <img
                src="/img/likelion_logo.png"
                alt="멋사로고"
                className="logo w-24"
              />
              <div className="title font-semibold	 flex items-center text-2xl ml-2">
                LikeLion Theater
              </div>
            </div>
          </Link>
          <div className="right flex mr-2 mt-5">
            <div className="icon flex flex-col items-center justify-center">
              <NavLink
                to="/login"
                // isActive를 3개가 공유하고 있어서 하나를 선택하고 또 다른 하나를 선택하면
                // 둘 다 파란색이 되는 것이 아닌
                // 하나만 하얀색이 됨
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive ? "text-[#2c6cf0]" : "text-black"
                  }`
                }
              >
                <BiLogIn size={25} />
                <span className="text-xs">LogIn</span>
              </NavLink>
            </div>
            <div className="icon flex flex-col items-center justify-center ml-5 ">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive ? "text-[#2c6cf0]" : "text-black"
                  }`
                }
              >
                <FiUserPlus size={25} />
                <span className="text-xs">SignUp</span>
              </NavLink>
            </div>
            <div className="icon flex flex-col items-center justify-center ml-5">
              <NavLink
                to="/mypage"
                className={({ isActive }) =>
                  `flex flex-col items-center ${
                    isActive ? "text-[#2c6cf0]" : "text-black"
                  }`
                }
              >
                <FiUser size={25} />
                <span className="text-xs">MyPage</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
