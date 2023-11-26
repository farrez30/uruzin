import React from "react";
import { cepat, integrasi, konsultasi } from "../../assets/picture";

const KomitmenKami = () => {
  const fiturLayanan = [
    {
      id: 1,
      image: konsultasi,
      title: "Konsultasi Gratis dan Tanpa Kewajiban",
      desc: "Kami mengerti bahwa memulai bisnis dapat menjadi tantangan. Oleh karena itu, kami menawarkan konsultasi gratis dan tanpa kewajiban untuk membantu Anda memahami proses perizinan yang dibutuhkan",
    },
    {
      id: 2,
      image: cepat,
      title: "Proses Cepat dan Efisien",
      desc: "Layanan Uruzin menjamin proses cepat dan efisien dalam pengurusan perizinan dan dokumentasi. Dengan pendekatan yang terorganisir, pelanggan dapat menghemat waktu dan mendapatkan izin usaha lebih cepat.",
    },
    {
      id: 3,
      image: integrasi,
      title: "Paket Layanan Terintegrasi",
      desc: "Solusi lengkap dalam satu tempat! Uruzin menawarkan paket layanan terintegrasi yang mencakup pembuatan badan hukum, pengurusan perizinan, dan layanan notaris digital. Hemat waktu dan tenaga dengan layanan all-in-one kami.",
    },
  ];

  const validasiLayanan = [
    {
      id: 1,
      title: "25+",
      desc: " Solusi Layanan Perizinan",
    },
    {
      id: 2,
      title: "30",
      desc: "Pengurusan Sertifikasi Halal",
    },
    {
      id: 3,
      title: "10+",
      desc: "Legal Partner Berpengalaman",
    },
    {
      id: 4,
      title: ">5",
      desc: "Berpengalaman Di Bidang Legal & Perizinan Usaha",
    },
  ];
  return (
    <section id="tentangkami" className=" mb-[40px] lg:mb-[152px] lg:pt-[150px]">
      {/* Mobile cards */}
      <div class="lg:hidden flex flex-row gap-[4px] mb-[35px]">
        <div className="flex flex-col gap-[10px] w-[50%]">
          {validasiLayanan.slice(0, 2).map(({ id, title, desc }) => {
            return (
              <div className="flex flex-col px-[40px] py-[39px] text-center w-[156px] h-[167px] rounded-[10px] bg-white-pure drop-shadow-[0_25px_100px_#44589d14]">
                <div className={id === 2 ? "" : "mb-5"}>
                  <h1 className="font-dm font-medium text-[35px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                    {title}
                    {id === 2 && (
                      <small className="font-dm font-medium text-[10px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                        Hari*
                      </small>
                    )}
                  </h1>
                </div>
                <div>
                  <p className="font-poppins font-normal text-[10px] leading-[15px] -tracking-[0.2px] text-dark-blue-uruzin">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[10px] w-[50%]">
          {validasiLayanan.slice(2).map(({ id, title, desc }) => {
            return (
              <div className="flex flex-col px-[10px] py-[39px] text-center w-[156px] h-[167px] rounded-[10px] bg-white-pure drop-shadow-[0_25px_100px_#44589d14]">
                <div className={id === 4 ? "" : "mb-5"}>
                  <h1 className="font-dm font-medium text-[35px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                    {title}
                    {id === 4 && (
                      <small className="font-dm font-medium text-[10px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                        Tahun
                      </small>
                    )}
                  </h1>
                </div>
                <div>
                  <p className="font-poppins font-normal text-[10px] leading-[15px] -tracking-[0.2px] text-dark-blue-uruzin">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <article className="flex-col flex justify-center gap-[10px] lg:gap-[21px] max-w-[1109px] mb-[35px] lg:mb-5">
        <h2 className="hidden lg:block font-poppins font-light text-[12px] leading-normal text-green-uruzin tracking-[2px] rounded-[10px] border border-solid border-green-uruzin py-[5px] px-7 max-w-max">
          KOMITMEN KAMI
        </h2>
        <h1 className="font-poppins font-medium text-[35px] lg:text-[40px] leading-[50px] text-dark-blue-uruzin -tracking-[0.5px]">
          Percayakan Urusan Anda kepada Uruzin
        </h1>
        <p className="font-poppins font-normal text-[16px] leading-[25px] lg:leading-[35px] text-gray-uruzin tracking-[0px]">
          Kami bukan sekadar penyedia layanan, tapi mitra dalam kesuksesan bisnis Anda. Percayakan semua urusan izin
          pada Uruzin, karena keberhasilan Anda adalah komitmen kami.
        </p>
      </article>
      {/* //? Section Bawah  ///////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="flex lg:gap-[115px]">
        <ul className="flex-col flex gap-10 lg:my-[31.5px] lg:w-[50%]">
          {fiturLayanan.map(({ id, image, title, desc }) => {
            return (
              <li className="flex flex-col lg:flex-row">
                <img
                  src={image}
                  alt={title}
                  className="bg-light-green-uruzin mb-[10px] max-w-[41px] lg:max-h-9 p-2 rounded-[4px] mr-4"
                />
                <div className="flex-col flex">
                  <h1 className="font-dm font-normal text-[20px] lg:text-[18px] leading-normal text-primary-content-uruzin tracking-[0px] mb-[10px]">
                    {title}
                  </h1>
                  <p className="hidden lg:block font-poppins font-normal text-[15px] leading-[30px] text-secondary-content-uruzin tracking-[0px] max-w-[352px]">
                    {desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div class="hidden lg:flex flex-row gap-[45px] w-[50%]">
          <div className="flex flex-col gap-4 mt-[67px]">
            {validasiLayanan.slice(0, 2).map(({ id, title, desc }) => {
              return (
                <div className="flex flex-col px-[87px] py-[98px] mb-[45px] text-center w-[300px] rounded-[10px] bg-white-pure drop-shadow-[0_25px_100px_#44589d14]">
                  <div className={id === 2 ? "" : "mb-5"}>
                    <h1 className="font-dm font-medium text-[72px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                      {title}
                      {id === 2 && (
                        <small className="font-dm font-medium text-[20px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                          Hari*
                        </small>
                      )}
                    </h1>
                  </div>
                  <div>
                    <p className="font-poppins font-normal text-[17px] leading-[25px] -tracking-[0.2px] text-dark-blue-uruzin">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {validasiLayanan.slice(2).map(({ id, title, desc }) => {
              return (
                <div className="flex flex-col px-[70px] py-[98px] mb-[45px] text-center w-[300px] rounded-[10px] bg-white-pure drop-shadow-[0_25px_100px_#44589d14]">
                  <div className={id === 4 ? "" : "mb-5"}>
                    <h1 className="font-dm font-medium text-[72px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                      {title}
                      {id === 4 && (
                        <small className="font-dm font-medium text-[20px] leading-[55px] -tracking-[1.5px] text-green-uruzin">
                          Tahun
                        </small>
                      )}
                    </h1>
                  </div>
                  <div>
                    <p className="font-poppins font-normal text-[17px] leading-[25px] -tracking-[0.2px] text-dark-blue-uruzin">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt="yo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt="bi"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt="a"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt="b"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default KomitmenKami;
