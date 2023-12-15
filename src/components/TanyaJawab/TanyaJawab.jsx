import React, { useState } from "react";
import { add, minus } from "../../assets/picture";

const TanyaJawab = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem((prevItem) => (prevItem === id ? null : id));
  };
  const faqs = [
    {
      id: 1,
      question: "Apa itu Uruzin?",
      answer:
        "Perusahaan yang bergerak dibidang jasa konsultan perizinan usaha yang profesional berpengalaman",
    },
    {
      id: 2,
      question: "Apa saja layanan yang ditawarkan oleh Uruzin?",
      answer:
        "Uruzin menawarkan berbagai layanan, termasuk pembuatan dan registrasi badan usaha, sertifikasi dan standar, registrasi dan perizinan, pengaturan internal perusahaan, serta layanan keuangan dan tenaga kerja.",
    },
    {
      id: 3,
      question: "Bagaimana cara memulai menggunakan layanan Uruzin?",
      answer:
        "Mudah! Pelaku usaha yang membutuhkan bantuan layanan pengurusan perijinan dapat menghubungi contact center Uruzin melalui nomor +62 851-8684-5500",
    },
    {
      id: 4,
      question: "Apakah Uruzin hanya melayani perusahaan besar?",
      answer:
        "Tidak, Uruzin melayani berbagai jenis bisnis, baik skala besar maupun skala kecil. Kami percaya bahwa setiap bisnis berhak mendapatkan dukungan yang diperlukan untuk berkembang.",
    },
    {
      id: 5,
      question: "Apakah konsultasi dengan Uruzin berbayar?",
      answer:
        "Tidak, konsultasi dengan Uruzin adalah gratis dan tanpa kewajiban. Kami ingin membantu Anda memahami kebutuhan bisnis Anda dan bagaimana kami dapat mendukungnya.",
    },
    {
      id: 6,
      question: "Apakah Uruzin memberikan layanan konsultasi keuangan?",
      answer:
        "Ya, Uruzin menyediakan layanan konsultasi keuangan melalui pengurusan BPJS Ketenagakerjaan, SP PKP (Pengusaha Kena Pajak), dan layanan notaris digital. Kami dapat membantu Anda mengelola aspek keuangan bisnis Anda dengan efisien.",
    },
    {
      id: 7,
      question: "Berapa lama proses pengurusan perizinan dengan Uruzin?",
      answer:
        "Waktu pengurusan perizinan dapat bervariasi tergantung pada jenis layanan yang Anda pilih. Namun, kami berkomitmen untuk menyediakan proses yang cepat dan efisien untuk setiap klien.",
    }
  ];
  return (
    <div>
      <section id="qna"  className="hidden lg:flex flex-col">
        <article className="flex-col mx-auto gap-5">
          <h2 className="font-poppins font-light text-[12px] leading-normal text-green-uruzin tracking-[2px] rounded-[10px] border border-solid border-green-uruzin py-[5px] px-7 max-w-max mx-auto">
            TANYA JAWAB
          </h2>
          <h1 className="font-poppins font-medium text-[40px] leading-[50px] text-black-uruzin -tracking-[0.5px] text-center mt-5">
            QnA
          </h1>
          <p className="font-poppins font-normal text-[16px] leading-[35px] text-gray-uruzin tracking-[0px] text-center mx-auto  mt-5 max-w-2xl mb-[67px]">
            Temukan jawaban atas pertanyaan-pertanyaan umum seputar izin halal. Dapatkan informasi lengkap dan jelas di
            bagian Tanya Jawab kami.
          </p>
        </article>
        {/* //? ////////////////////////////////////////////////////////// */}
        <article id="accordion" className="overflow-hidden flex flex-col gap-[30px]">
          {faqs.map(({ id, question, answer }) => {
            return (
              <div className={`item ${activeItem === id ? "active" : ""}`}>
                <div className={`header flex gap-[15px] items-center cursor-pointer`} onClick={() => toggleItem(id)}>
                  <img src={minus} alt="toggle icon" className="activeIcon" />
                  <img src={add} alt="toggle icon" className="inactiveIcon" />
                  <h1 className="font-poppins font-medium text-[18px] -tracking-[0.5px] leading-[30px] text-dark-blue-uruzin select-none">
                    {question}
                  </h1>
                </div>
                <div className={`content transition-all duration-300`}>
                  <p className="font-poppins font-normal text-[16px] tracking-[0px] leading-[32px] text-light-dark-uruzin ml-[37px]">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </article>
        {/* //! ///////////////////////////////////////////////////////////////////////// */}
        {/* <article
          id="accordion"
          className="text-white-pure rounded-lg overflow-hidden bg-gray-uruzin flex flex-col gap-[1px]"
        >
          {faqs.map(({ id, question, answer }) => {
            return (
              <div
                className={`item ${
                  activeItem === id ? "active" : ""
                }`}
                key={id}
              >
                <div
                  className={`header p-6 bg-dark-blue-uruzin font-bold flex justify-between items-center cursor-pointer ${
                    activeItem === id ? "active bg-purple-uruzin" : ""
                  }`}
                  onClick={() => toggleItem(id)}
                >
                  <h1>{question}</h1>
                  <img src={activeItem === id ? minus : add} alt="toggle icon" className="activeIcon" />
                </div>
                <div
                  className={`content transition-all duration-[3000ms] ease-in-out ${
                    activeItem === id ? "block p-8 h-[300px]" : "hidden h-0 overflow-hidden py-0"
                  }`}
                >
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </article> */}
        {/* //? ////////////////////////////////////////////////////////// */}
      </section>
    </div>
  );
};

export default TanyaJawab;
