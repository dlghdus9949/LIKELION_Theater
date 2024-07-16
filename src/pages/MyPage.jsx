import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function MyPage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container w-[70%] mb-5">
          <div className="top flex border p-8 mt-5 bg-gray-50">
            <div className="profile flex">
              <FaUserCircle size={100} />
              <div className="justify-center flex flex-col ml-6">
                <div className="border-b p-1">
                  <span className="text-xl font-bold	">이호연님</span>
                  <span className="ml-3">ozoimi</span>
                </div>
                <div className="p-1 text-sm">
                  <span>고객님은 '일반'등급 입니다</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom border px-10 py-5 my-3">
            <div className="flex justify-between text-xs">
              <div className="coupon w-[25%]">
                <span className="font-bold text-sm flex justify-center mb-1">
                  MY COUPON
                </span>
                <div className="text-xs flex justify-between">
                  <span>LIKELION 할인쿠폰</span>
                  <span>0개</span>
                </div>
                <div className="flex justify-between">
                  <span>영화관람권</span>
                  <span>0개</span>
                </div>
              </div>
              <div className="w-[25%]">
                <span className="font-bold text-sm flex justify-center mb-1">
                  POINT
                </span>
                <div className="flex justify-between">
                  <span>사용 가능 포인트</span>
                  <span>0000점</span>
                </div>
              </div>
              <div className="w-[25%]">
                <span className="font-bold text-sm flex justify-center mb-1">
                  VIP 점수
                </span>
                <div className="flex justify-between">
                  <span>VIP 누적 점수</span>
                  <span>100/10,000점</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
