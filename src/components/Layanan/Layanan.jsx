import React from "react";
import {
  checked,
  keuanganTenagaKerja,
  pendirianBadanUsaha,
  registrasiPerizinan,
  right,
  sertifikasiStandar,
} from "../../assets/picture";

const Layanan = () => {
  const jenisLayanan = [
    {
      id: 1,
      no: "1",
      image: pendirianBadanUsaha,
      title: "Pendirian Badan Usaha",
      desc: "Membuka pintu gerbang kesuksesan bisnis Anda dengan langkah pertama yang benar. Uruzin menyediakan layanan pembuatan badan hukum, termasuk PT (Perseroan Terbatas) dan CV (Commanditaire Vennootschap). Dengan panduan ahli kami, Anda dapat memilih struktur badan hukum yang sesuai untuk mengawali perjalanan bisnis Anda dengan kokoh.",
      subJasa: ["PT (Perseroan Terbatas)", "CV (Commanditaire Vennootschap)", "Dll."],
    },
    {
      id: 2,
      no: "2",
      image: registrasiPerizinan,
      title: "Registrasi dan Perizinan",
      desc: "Mengurus semua dokumen dan perizinan bisnis menjadi lebih mudah dengan bantuan Uruzin. Dari pengurusan NIB (Nomor Induk Berusaha) hingga pendaftaran merek/HAKI, serta perizinan BPOM, PIRT, izin lingkungan, dan IMB, kami hadir untuk memastikan setiap aspek bisnis Anda tunduk pada regulasi yang berlaku.",
      subJasa: [
        "Pengurusan NIB (Nomor Induk Berusaha)",
        "Pendaftaran Merek/HAKI",
        "Pendaftaran BPOM",
        "Pengurusan Izin PIRT",
        "Pengurusan Izin Lingkungan",
        "Pengurusan IMB",
      ],
    },
    {
      id: 3,
      no: "3",
      image: sertifikasiStandar,
      title: "Sertifikasi dan Standar",
      desc: "Tingkatkan kredibilitas bisnis Anda dengan sertifikasi dan standar yang diakui. Uruzin menawarkan layanan pengurusan sertifikat standar, sertifikat halal, dan sertifikat hygiene. Dengan bantuan tim profesional kami, Anda dapat memastikan bahwa produk atau layanan Anda memenuhi standar tertinggi, membuka peluang baru dan membangun kepercayaan pelanggan.",
      subJasa: ["Pengurusan Sertifikat Standar", "Pengurusan Sertifikat Halal", "Pengurusan Sertifikat Hygiene"],
    },
    {
      id: 4,
      no: "4",
      image: pendirianBadanUsaha,
      title: "Pendirian Badan Usaha",
      desc: "Peraturan internal yang jelas dan sesuai perundang-undangan merupakan fondasi yang kokoh untuk pertumbuhan bisnis. Uruzin membantu dalam pembuatan peraturan perusahaan dan pengurusan perubahan akta perusahaan, memastikan bahwa struktur dan kebijakan perusahaan Anda selaras dengan perkembangan bisnis yang dinamis.",
      subJasa: ["Pembuatan Peraturan Perusahaan", "Pengurusan Perubahan Akta Perusahaan", "Layanan Notaris Digital"],
    },
    {
      id: 5,
      no: "5",
      image: keuanganTenagaKerja,
      title: "Keuangan dan Tenaga Kerja",
      desc: "Urus aspek keuangan dan tenaga kerja bisnis Anda dengan mudah. Uruzin menyediakan layanan pengurusan BPJS Ketenagakerjaan, SP PKP (Pengusaha Kena Pajak), dan layanan notaris digital untuk membantu Anda mengelola segala kebutuhan administratif dengan efisien dan terintegrasi.",
      subJasa: ["Pengurusan BPJS Ketenagakerjaan", "Pengurusan SP PKP (Pengusaha Kena Pajak)"],
    },
  ];
  return (
    <section id="layanan" className="flex-col mt-44">
                {/* <div id="layanan"></div> */}
      <article className="flex-col mx-auto gap-5">
        <h2 className="font-poppins font-light text-[12px] leading-normal text-green-uruzin tracking-[2px] rounded-[10px] border border-solid border-green-uruzin py-[5px] px-7 max-w-max mx-auto">
          LAYANAN KAMI
        </h2>
        <h1 className="font-poppins font-medium text-[40px] leading-[50px] text-black-uruzin -tracking-[0.5px] text-center mt-5">
          Layanan Izin Usaha <i>All in One</i>
        </h1>
        <p className="font-poppins font-normal text-[16px] leading-[35px] text-gray-uruzin tracking-[0px] text-center mx-auto  mt-5 max-w-2xl mb-16">
          Solusi lengkap dalam satu tempat! Uruzin menawarkan paket layanan terintegrasi yang Hemat waktu dan tenaga
          dengan layanan all-in-one kami.
        </p>
      </article>
      <article>
        {jenisLayanan.map(({ id, no, image, title, desc, subJasa }) => {
          return (
            <div className="flex items-center gap-[101px] mb-32 justify-center">
              {id % 2 === 0 ? (
                <>
                  <article className="flex-col w-[50%]">
                    <title className="flex gap-5 py-5 items-center">
                      <h1 className="font-poppins font-medium text-[25px] leading-[60px] text-black-pure -tracking-[1.5px] bg-white-pure w-[54px] h-[54px] text-center rounded-[27px] drop-shadow-[0_8px_24px_#355f9e1a] shadow-black-pure">
                        {no}
                      </h1>
                      <h1 className="font-poppins font-medium text-[32px] leading-[60px] text-dark-blue-uruzin -tracking-[1.5px]">
                        {title}
                      </h1>
                    </title>
                    <p className="font-poppins font-normal text-[12px] leading-[25px] text-gray-uruzin tracking-[0px] mb-5">
                      {desc}
                    </p>
                    <ul>
                      {subJasa.map((jasa) => (
                        <li className="flex gap-2">
                          <img src={checked} alt={jasa} />
                          <div className="font-poppins font-medium text-[12px] leading-[45px] text-purple-uruzin tracking-[0px]">
                            {jasa}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <a href="" className="flex items-baseline text-blue-uruzin py-3 max-w-max mt-4">
                      <p className="font-dm font-bold text-[16px] leading-[42px] tracking-[0px] mr-5">Hubungi Kami</p>
                      <img src={right} alt="right-arrow" className="animate-bounceright" />
                      {/* ///////////////////////////////////////////////////////////////////////// */}
                      {/* //? Start of Animated Button  ///////////////////////////////////// */}
                      {/* <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-400 group-hover:h-full group-active:bg-blue-200"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                          <svg class="w-5 h-5 text-blue-400 animate-bounceright" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Hubungi Kami</span>
                      </a> */}
                      {/* //? End of Animated Button  ///////////////////////////////////// */}
                    </a>
                  </article>
                  <div className="w-[50%]">
                    <img src={image} alt={title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[50%]">
                    <img src={image} alt={title} />
                  </div>
                  <article className="flex-col w-[50%]">
                    <title className="flex gap-5 py-5 items-center">
                      <h1 className="font-poppins font-medium text-[25px] leading-[60px] text-black-pure -tracking-[1.5px] bg-white-pure w-[54px] h-[54px] text-center rounded-[27px] drop-shadow-[0_8px_24px_#355f9e1a] shadow-black-pure">
                        {no}
                      </h1>
                      <h1 className="font-poppins font-medium text-[30px] leading-[60px] text-dark-blue-uruzin -tracking-[1.5px]">
                        {title}
                      </h1>
                    </title>
                    <p className="font-poppins font-normal text-[12px] leading-[25px] text-gray-uruzin tracking-[0px] mb-5">
                      {desc}
                    </p>
                    <ul>
                      {subJasa.map((jasa) => (
                        <li className="flex gap-2">
                          <img src={checked} alt={jasa} />
                          <div className="font-poppins font-medium text-[12px] leading-[45px] text-purple-uruzin tracking-[0px]">
                            {jasa}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <a href="" className="flex items-baseline text-blue-uruzin py-3 max-w-max mt-4">
                      <p className="font-dm font-bold text-[16px] leading-[42px] tracking-[0px] mr-5">Hubungi Kami</p>
                      <img src={right} alt="right-arrow" className="animate-bounceright" />
                      {/* ///////////////////////////////////////////////////////////////////////// */}
                      {/* //? Start of Animated Button  ///////////////////////////////////// */}
                      {/* <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-400 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-400 group-hover:h-full group-active:bg-blue-200"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                          <svg class="w-5 h-5 text-blue-400 animate-bounceright" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Hubungi Kami</span>
                      </a> */}
                      {/* //? End of Animated Button  ///////////////////////////////////// */}
                    </a>
                  </article>
                </>
              )}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Layanan;
