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
    <section className="flex">
      <article>
        <div className="flex-col text-start ml-48 mt-32">
          <h1 className="font-bold text-5xl">Urus Izin Usaha</h1>
          <h1 className="font-bold text-5xl mt-4">Jadi Semudah Itu!</h1>
          <p className="mt-8 leading-9 max-w-md mr-14">
            Percayakan urusan perizinan bisnis Anda pada PT Uruzin Solusi Bisnis. Kami hadir untuk menjadikan proses
            perizinan usaha semudah mungkin.
          </p>
          <button className="mt-10 py-3 px-6 bg-green-600 text-white rounded-lg">Hubungi Kami</button>
          <p className="mt-14">Dipercaya Oleh</p>
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
      <img src={jasaUruzin} alt="jasa uruzin" className="h-[630px]" />
    </section>
  );
};

export default Main;
