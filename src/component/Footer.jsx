import React from "react";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const emailUrl = "mailto:dlghdus9949@sungkyul.ac.kr";
  const instaUrl = "https://www.instagram.com/ozoimi/";
  const kakaoUrl = "https://pf.kakao.com/dlghdus9949";
  return (
    <>
      <div className="flex justify-center text-center">
        <div className="container flex-col w-[70%] flex border-t py-8">
          <div className="email text-sm font-medium mb-2">
            dlghdus9949@sungkyul.ac.kr
          </div>
          <div className="copyright text-sm font-medium mb-2">
            SKU-sku.com &copy; 2024
          </div>
          <div className="contact text-sm font-medium mb-2">문의하기</div>
          <div className="icon flex justify-center itmes-center mb-2">
            <MdEmail
              size={35}
              onClick={() => {
                window.open(emailUrl);
              }}
              className="m-2 cursor-pointer"
              color="skyblue"
            />
            <img
              src="/img/instagram_icon.png"
              alt="인스타"
              onClick={() => {
                window.open(instaUrl);
              }}
              className="w-8 h-fit m-2 cursor-pointer	"
            />
            <img
              src="/img/kakaotalk_logo.png"
              alt="카톡"
              onClick={() => {
                window.open(kakaoUrl);
              }}
              className="w-8 h-fit m-2 cursor-pointer"
            />
          </div>
          <div className="span text-xs text-slate-500">
            LikeLion Theater는 성결대 멋쟁이사자처럼 이호연의 제작물입니다{" "}
            <br />
            서비스 및 동아리 관련 문의는 위 저널들을 통해 해주시길 바랍니다.
          </div>
        </div>
      </div>
    </>
  );
}
