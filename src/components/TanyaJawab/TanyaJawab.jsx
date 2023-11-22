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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore fugit harum officiis? Assumenda ab fugit obcaecati laborum vel, itaque dicta labore distinctio id veritatis dolorum officia architecto facere a.",
    },
    {
      id: 2,
      question: "Apa saja layanan yang ditawarkan oleh Uruzin?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore fugit harum officiis? Assumenda ab fugit obcaecati laborum vel, itaque dicta labore distinctio id veritatis dolorum officia architecto facere a.",
    },
    {
      id: 3,
      question: "Bagaimana cara memulai menggunakan layanan Uruzin?",
      answer:
        "Mudah! Hubungi kami melalui formulir kontak di situs web kami atau langsung menghubungi tim customer service kami. Kami akan memberikan konsultasi gratis dan panduan mengenai layanan yang sesuai untuk kebutuhan bisnis Anda.",
    },
    {
      id: 4,
      question: "Apakah Uruzin hanya melayani perusahaan besar?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore fugit harum officiis? Assumenda ab fugit obcaecati laborum vel, itaque dicta labore distinctio id veritatis dolorum officia architecto facere a.",
    },
  ];
  return (
    <section className="flex-col mt-44">
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
              <div className={`content transition-all duration-500`}>
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
  );
};

export default TanyaJawab;
