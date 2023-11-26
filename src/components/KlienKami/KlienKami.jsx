import React from "react";
import { klienkami } from "../../assets/picture";

const KlienKami = () => {
  return (
    <>
      <section className="flex flex-col lg:mb-[132.64px]">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-[103px]">
          <article className="flex flex-col lg:w-[50%] gap-[10px] lg:gap-0">
            <h2 className="hidden lg:block font-poppins font-light text-[12px] leading-normal text-green-uruzin tracking-[2px] rounded-[10px] border border-solid border-green-uruzin py-[5px] px-7 max-w-max">
              KLIEN KAMI
            </h2>
            <title className="flex lg:py-5 items-center">
              <h1 className="font-poppins font-medium text-[35px] lg:text-[40px] leading-[50px] lg:leading-[80px] text-dark-blue-uruzin -tracking-[0.5px]">
                Dari UMKM hingga Perusahaan Korporasi
              </h1>
            </title>
            <p className="font-poppins font-normal text-[16px] lg:text-[12px] leading-[25px] text-gray-uruzin tracking-[0px] mb-[35px] lg:mb-5">
              Beberapa kisah sukses dari berbagai skala bisnis, dari UMKM hingga perusahaan korporasi. Bergabunglah
              dengan klien-klien kami yang telah meraih keberhasilan bersama Uruzin.
            </p>
          </article>
          <div className="lg:w-[50%] lg:mb-10">
            <img src={klienkami} alt="Klien-klien Uruzin" />
          </div>
        </div>
        <iframe
          className="aspect-video rounded-[10px] lg:mx-[99px]"
          src="https://www.youtube.com/embed/XMvf-bprs_E?si=4IzDBXpLfXHeZzMc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};

export default KlienKami;
