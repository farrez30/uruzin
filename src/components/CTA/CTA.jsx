import React from "react";
import { vector } from "../../assets/picture";
// import { vector } from "../../assets/picture";

const CTA = () => {
  return (
    <>
      <div className="w-[100%] h-[360px] -mt-[360px] relative border border-solid border-green-uruzin rounded-[20px] bg-none -z-10 top-[342px] right-3.5"></div>
      <img src={vector} alt="just decoration" className="absolute right-[15%]" />
      <div className="font-['Poppins'] flex-col bg-vector bg-gradient-to-br from-[#009d5a] to-[#007342] rounded-[20px] px-14 pb-32 pt-[69px] pl-[67px] max-h-[360px] mb-[51px]">
        <h1 className="font-poppins font-medium text-[40px] leading-[60px] -tracking-[1.5px] text-white-pure mb-2 z-30">
          Bingung mau mulai dari mana?
        </h1>
        <h2 className="font-poppins font-normal text-[32px] leading-[60px] -tracking-[1.5px] text-light-gray-uruzin mb-10">
          Mulai konsultasi dengan Uruzin
        </h2>
        <a
          href=""
          className="font-dm font-bold text-[18px] leading-[10px] tracking-[0px] text-green-uruzin bg-white-pure px-5 py-3 rounded-lg mb-7"
        >
          Hubungi Kami
        </a>
        {/* <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-700 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white group-active:translate-y-1 group-active:translate-x-1">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Hubungi Kami</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-100 ease-linear bg-gray-900 rounded-lg "
              data-rounded="rounded-lg"
            ></span>
          </a> */}
          {/* <div id="tentang"></div> */}
      </div>
    </>
  );
};

export default CTA;
