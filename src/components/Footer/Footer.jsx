import React from "react";
import { uruzinLogo } from "../../assets/picture";

const Footer = () => {
  return (
    <>
      <hr className="h-[1px] w-full text-center text-light-gray-uruzin" />
      <footer className="flex gap-10 justify-start mt-[45px] mb-[45px] items-center">
        <div>
          <img src={uruzinLogo} className="h-9" alt="uruzin logo" />
        </div>
        <p className="font-poppins font-normal text-dark-blue-uruzin text-[14px] tracking-[0px]">
          © 2023 | PT Uruzin Solusi Bisnis
        </p>
      </footer>
    </>
  );
};

export default Footer;
