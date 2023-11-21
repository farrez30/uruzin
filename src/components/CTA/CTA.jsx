import React from "react";
// import { vector } from "../../assets/picture";

const CTA = () => {
  return (
    <>
      <div className="font-['Poppins'] flex-col bg-gradient-to-br from-[#009d5a] to-[#007342] rounded-lg px-14 pb-32 pt-20 mx-48 max-h-[360px] mb-44">
      {/* <div className="flex-col bg-gradient-to-br from-[#009d5a] to-[#007342] rounded-lg shadow-[-10px_-10px_rgba(0,90,0,0.3)] px-14 pb-7 mx-48 max-w mb-44"> */}
        <h1 className="text-white text-4xl font-semibold mb-2 pt-7">Bingung mau mulai dari mana?</h1>
        <h2 className="text-gray-700 text-3xl font-medium mb-10">Mulai konsultasi dengan Uruzin</h2>
        <a href="" className="text-green-700 bg-white px-5 py-3 rounded-lg font-bold mb-7 hover:bg-green-300">
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
      </div>
      <div></div>
    </>
  );
};

export default CTA;
