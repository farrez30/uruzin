import React from "react";
import { facebook, gmaps, instagram, linkedin } from "../../assets/picture";
import EmailForm from "./EmailForm";

const HubungiKami = () => {
  return (
    <section id="hubungikami" className="flex flex-col mb-[40px] lg:mb-[70px] pt-10 lg:pt-[168px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[170px]">
        <article className="flex flex-col lg:w-[50%]">
          <h2 className="hidden lg:block font-poppins font-light text-[12px] leading-normal text-green-uruzin tracking-[2px] rounded-[10px] border border-solid border-green-uruzin py-[5px] px-7 max-w-max">
            HUBUNGI KAMI
          </h2>
          <title className="flex mb-[10px] lg:mb-auto lg:py-5 items-center">
            <h1 className="font-poppins font-medium text-[35px] lg:text-[40px] leading-[50px] lg:leading-[80px] text-dark-blue-uruzin -tracking-[0.5px]">
              Uruzin Siap Membantu Usaha Anda!
            </h1>
          </title>
          <p className="font-poppins font-normal text-[16px] leading-[35px] text-gray-uruzin tracking-[0px] mb-[35px] lg:mb-5">
            Butuh bantuan atau informasi lebih lanjut? Jangan ragu untuk menghubungi tim kami. Kami siap membantu
            memperlancar perjalanan izin usaha Anda.
          </p>
        </article>
        <article className="lg:w-[50%] gap-[35px] lg:gap-0 lg:mb-10 flex flex-col">
          <div className="flex flex-col lg:mb-5">
            <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary-content-uruzin tracking-[0px] mb-[15px]">
              Head Office
            </h1>
            <p className="font-poppins font-normal text-[16px] leading-[25.6px] text-gray-uruzin tracking-[0px] mb-[20px] lg:mb-[35px]">
              Ruko Heavenland Park BB26, Jalan Lingkar Timur, Kabupaten Sidoarjo
            </p>
            <a href="https://maps.app.goo.gl/cVxVoUmsMncQW6Ct9">
              <img src={gmaps} alt="Alamat Uruzin via Google Maps" />
            </a>
          </div>
          <div className="flex flex-col max-w-[354px]">
            <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-primary-content-uruzin tracking-[0px] mb-[15px]">
              Mari Berkoneksi!
            </h1>
            <div className="flex justify-between mb-[35px] lg:gap-5">
              <a
                href=""
                className="font-poppins font-normal text-[16px] leading-[28px] text-gray-uruzin tracking-[0px]"
              >
                +62 851-8684-5500
              </a>
              <p>|</p>
              <a
                href="mailto:uruzin@gmail.com"
                className="font-poppins font-normal text-[16px] leading-[28px] text-gray-uruzin tracking-[0px]"
              >
                uruzin@gmail.com
              </a>
            </div>
            <div className="flex justify-start items-center gap-[17px]">
              <a href="#footer">
                <img src={facebook} alt="Media Sosial Facebook Uruzin" />
              </a>
              <a href="#footer">
                <img src={instagram} alt="Media Sosial Instagram Uruzin" />
              </a>
              <a href="#footer">
                <img src={linkedin} alt="Media Sosial Linkedin Uruzin" />
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="hidden lg:block">
        <EmailForm />
      </div>
    </section>
  );
};

export default HubungiKami;
