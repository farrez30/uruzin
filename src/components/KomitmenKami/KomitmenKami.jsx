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
      title: ">30",
      desc: "Pengurusan Sertifikasi Halal",
    },
    {
      id: 3,
      title: "10+",
      desc: "Legal Partner Berpengalaman",
    },
    {
      id: 4,
      title: "3M",
      desc: "Job posted everydays with  qualification",
    },
  ];
  return (
    <section>
      <article className="mx-auto flex-col">
        <h2 className="text-green-500 rounded-lg outline outline-2 outline-green-500 bg-black outline-offset-8 max-w-max ml-2 py-1 px-7">
          KOMITMEN KAMI
        </h2>
        <h1 className="text-4xl font-semibold mt-5">Percayakan Urusan Anda kepada Uruzin</h1>
        <p className="mt-5 leading-9 mb-16 mr-96">
          Kami bukan sekadar penyedia layanan, tapi mitra dalam kesuksesan bisnis Anda. Percayakan semua urusan izin
          pada Uruzin, karena keberhasilan Anda adalah komitmen kami.
        </p>
      </article>
      <div className="flex gap-28">
        <ul className="flex-col max-w-md">
          {fiturLayanan.map(({ id, image, title, desc }) => {
            return (
              <li className="flex">
                <img src={image} alt={title} className="bg-green-600 max-h-9 p-2 rounded-lg mr-4" />
                <div className="flex-col mb-10">
                  <h1 className="mb-2 text-lg font-bold">{title}</h1>
                  <p className="leading-9">{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div class="flex gap-4">
          <div className="flex-col gap-4 mt-20">
            {validasiLayanan.slice(0, 2).map(({ id, title, desc }) => {
              return (
                <div className="flex-col p-20 mb-11 text-center max-w-[300px]">
                  <div>
                    <h1 className="text-green-500 text-7xl font-bold">{title}{id === 2 && <small className="text-xl">Hari</small>}</h1>
                  </div>
                  <div>
                    <p className="leading-6">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-col gap-4">
            {validasiLayanan.slice(2).map(({ id, title, desc }) => {
              return (
                <div className="flex-col p-20 mb-11 text-center max-w-[300px]">
                  <div>
                    <h1 className="text-green-500 text-7xl font-bold">{title}</h1>
                  </div>
                  <div>
                    <p className="leading-6">{desc}</p>
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
