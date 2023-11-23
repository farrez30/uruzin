import React from "react";
import {
  checked,
  jasaUruzin,
  lazizaa,
  lemooin,
  listjasa,
  listjasahalf1,
  listjasahalf2,
  rajaRotiCemerlang,
  tirtamasColdStorage,
} from "../../assets/picture";
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
    <header className="flex flex-col lg:flex-row justify-between lg:gap-[60px] mt-[23px] lg:mt-[90px]">
      <article className="lg:w-[50%]">
        <div className="flex-col text-start">
          <h1 className="font-poppins font-semibold text-[35px] lg:text-[55px] leading-[50px] lg:leading-[80px] tracking-[0px] lg:-tracking-[1px]">
            Urus Izin Usaha Jadi Semudah Itu!
          </h1>
          <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[25px] lg:leading-[42px] text-gray-uruzin tracking-[0px] mt-[10px] lg:mt-8">
            Percayakan urusan perizinan bisnis Anda pada PT Uruzin Solusi Bisnis. Kami hadir untuk menjadikan proses
            perizinan usaha semudah mungkin.
          </p>
          <a href="https://wa.me/6285186845500">
            <button className="font-dm font-bold text-[14px] lg:text-[18px] leading-[10px] tracking-[0px] mt-[20px] lg:mt-10 py-[15px] lg:py-[25px] px-[25px] bg-green-uruzin text-white-pure rounded-[6px] lg:rounded-lg">
              Hubungi Kami
            </button>
          </a>
          <p className="hidden lg:block font-poppins font-medium text-[16px] leading-[10px] tracking-[0px] text-dark-blue-uruzin mt-14">
            Dipercaya Oleh
          </p>
          <div className="hidden lg:flex mt-3 gap-2">
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
      <div className="lg:w-[50%] hidden lg:block ">
        <img src={jasaUruzin} alt="jasa uruzin" className="object-contain" />
      </div>

      <div className="ml-[0px] border border-green-uruzin carousel w-68 max-w-md lg:hidden mt-10 drop-shadow-xl gap-[0px]">
        <div className="carousel-item ">
          <img src={listjasahalf1} alt="jasa uruzin" className="object-contain" />
        </div>
        <div className="carousel-item">
          <img src={listjasahalf2} alt="jasa uruzin" className="object-contain" />
        </div>
        {/* <div className="carousel-item">
          <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
        </div> */}
      </div>
      {/* <div className="lg:hidden mt-10 drop-shadow-xl">
        <img src={listjasa} alt="jasa uruzin" className="object-contain" />
      </div> */}

      <div className="lg:hidden mt-10 flex border border-green-uruzin p-8 overflow-hidden overflow-x-scroll gap-[25px] ">
        <div className="shrink-0 flex justify-between w-[234px] h-[50px] bg-white-pure rounded-[20px] shadow-2xl shadow-black-pure border">
          <h1 className="border ml-[23px] self-center font-poppins font-semibold text-black-pure text-[16px] tracking-[0px] leading-[60px]">
            Pendirian PT,CV
          </h1>
          <img src={checked} alt="jasa uruzin" className="border z-50 h-[67px] self-center translate-x-2" />
        </div>

        <div className="shrink-0 flex justify-between w-[234px] h-[50px] bg-white-pure rounded-[20px] shadow-2xl shadow-black-pure border">
          <h1 className="border ml-[23px] self-center font-poppins font-semibold text-black-pure text-[16px] tracking-[0px] leading-[60px]">
            Pendirian PT,CV
          </h1>
          <img src={checked} alt="jasa uruzin" className="border z-50 h-[67px] self-center translate-x-2" />
        </div>

        <div className="shrink-0 flex justify-between w-[234px] h-[50px] bg-white-pure rounded-[20px] shadow-2xl shadow-black-pure border">
          <h1 className="border ml-[23px] self-center font-poppins font-semibold text-black-pure text-[16px] tracking-[0px] leading-[60px]">
            Pendirian PT,CV
          </h1>
          <img src={checked} alt="jasa uruzin" className="border z-50 h-[67px] self-center translate-x-2" />
        </div>
      </div>
    </header>
  );
};

export default Main;
