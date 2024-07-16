import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="container w-[70%] items-center border-b border-b-indigo-950">
          <ul className="nav ml-10 flex">
            <li className="movie m-3">
              <NavLink
                to="/movieinfo"
                className={({ isActive }) =>
                  `mx-1 py-3 font-bold ${
                    isActive ? "text-[#2c6cf0]" : "text-black"
                  }`
                }
              >
                영화
              </NavLink>
            </li>
            <li className="ticket m-3">
              <NavLink
                to="/ticketing"
                className={({ isActive }) =>
                  `mx-1 py-3 font-bold ${
                    isActive ? "text-[#2c6cf0]" : "text-black"
                  }`
                }
              >
                예매
              </NavLink>
            </li>
            <li className="theater m-3">
              <NavLink
                to="/theater"
                className={({ isActive }) =>
                  `mx-1 py-3 font-bold ${
                    isActive ? "text-[#2c6cf0]" : "text-black"
                  }`
                }
              >
                극장
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
