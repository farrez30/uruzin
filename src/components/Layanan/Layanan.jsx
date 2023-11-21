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
    <section className="flex-col mt-40">
      <article className="mx-auto">
        <h2 className="text-green-500 rounded-lg outline outline-2 outline-green-500 bg-black outline-offset-8 max-w-max mx-auto py-1 px-7">
          LAYANAN KAMI
        </h2>
        <h1 className="text-center text-4xl font-semibold mt-5">
          Layanan Izin Usaha <i>All in One</i>
        </h1>
        <p className="text-center mt-5 leading-9 mx-96 mb-16">
          Solusi lengkap dalam satu tempat! Uruzin menawarkan paket layanan terintegrasi yang Hemat waktu dan tenaga
          dengan layanan all-in-one kami.
        </p>
      </article>
      <article className="mx-48">
        {jenisLayanan.map(({ id, no, image, title, desc, subJasa }) => {
          return (
            <div className="flex items-center gap-24 mb-32 justify-center">
              {id % 2 === 0 ? (
                <>
                  <article className="flex-col">
                    <title className="flex gap-5 text-2xl font-semibold px-5 py-5 my items-center">
                      <h1 className="bg-white px-5 py-3 rounded-full drop-shadow-lg shadow-green-600">{no}</h1>
                      <h1>{title}</h1>
                    </title>
                    <p className="mb-5 leading-9">{desc}</p>
                    <ul>
                      {subJasa.map((jasa) => (
                        <li className="flex gap-2 py-3">
                          <img src={checked} alt={jasa} />
                          {jasa}
                        </li>
                      ))}
                    </ul>
                    <a href="" className="flex items-baseline text-blue-500 py-3 max-w-max mt-4">
                      <p className="mr-5">Hubungi Kami</p>
                      <img src={right} alt="right-arrow" />
                    </a>
                  </article>
                  <img src={image} alt={title} className="h-96" />
                </>
              ) : (
                <>
                  <img src={image} alt={title} className="h-96" />
                  <article className="flex-col">
                    <title className="flex gap-5 text-2xl font-semibold px-5 py-5 my items-center">
                      <h1 className="bg-white px-5 py-3 rounded-full drop-shadow-lg shadow-green-600">{no}</h1>
                      <h1>{title}</h1>
                    </title>
                    <p className="mb-5 leading-9">{desc}</p>
                    <ul>
                      {subJasa.map((jasa) => (
                        <li className="flex gap-2 py-3">
                          <img src={checked} alt={jasa} />
                          {jasa}
                        </li>
                      ))}
                    </ul>
                    <a href="" className="flex items-baseline text-blue-500 py-3 max-w-max mt-4">
                      <p className="mr-5">Hubungi Kami</p>
                      <img src={right} alt="right-arrow" />
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
