import React from "react";
import { jasaUruzin, lazizaa, lemooin, rajaRotiCemerlang, tirtamasColdStorage } from "../../assets/picture";
// import imagesData from '../../assets/picture'

const Main = () => {
  const clientItem = [
    {
      logo: lemooin,
      title: "Lemoo-in",
    },
    {
      logo: lazizaa,
      title: "Lazizaa",
    },
    {
      logo: rajaRotiCemerlang,
      title: "Raja Roti Cemerlang",
    },
    {
      logo: tirtamasColdStorage,
      title: "Tirtamas Cold Storage",
    },
  ];
  return (
    <header className="flex justify-between gap-[60px] mt-[90px]">
      <article className="w-[50%]">
        <div className="flex-col text-start">
          <h1 className="font-poppins font-semibold text-[55px] leading-[80px] -tracking-[1px]">Urus Izin Usaha Jadi Semudah Itu!</h1>
          <p className="font-poppins font-normal text-[18px] leading-[42px] text-gray-uruzin tracking-[0px] mt-8">
            Percayakan urusan perizinan bisnis Anda pada PT Uruzin Solusi Bisnis. Kami hadir untuk menjadikan proses
            perizinan usaha semudah mungkin.
          </p>
          <a href="https://wa.me/6285186845500"><button className="font-dm font-bold text-[18px] leading-[10px] tracking-[0px] mt-10 p-[25px] bg-green-uruzin text-white-pure rounded-lg">Hubungi Kami</button></a>
          <p className="font-poppins font-medium text-[16px] leading-[10px] tracking-[0px] text-dark-blue-uruzin mt-14">Dipercaya Oleh</p>
          <div className="flex mt-3 gap-2">
            {clientItem.map(({ logo, title }) => {  
              return (
                <>
                  <img src={logo} alt={title} className="h-11" />
                </>
              );
            })}
          </div>
        </div>
      </article>
      <div className="w-[50%]">
        <img src={jasaUruzin} alt="jasa uruzin" className="object-contain" />
      </div>
    </header>
  );
};

export default Main;
