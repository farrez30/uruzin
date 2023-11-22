import React, { useEffect, useState } from "react";
import { uruzinLogo } from "../../assets/picture";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  // Fungsi untuk memantau posisi scroll
  const menuItem = [
    {
      to: "#layanan",
      title: "Layanan",
    },
    {
      to: "#tentang",
      title: "Tentang Kami",
    },
    {
      to: "#qna",
      title: "QnA",
    },
    {
      to: "#hubungi",
      title: "Hubungi Kami",
    },
  ];
  const handleScroll = () => {
    // Menentukan bagian mana yang sedang aktif berdasarkan posisi scroll
    for (const section of menuItem) {
      const elem = document.querySelector(section.to);
      if (elem) {
        const rect = elem.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom >= 300) {
          setActiveNav(section.to);
          break; // Keluar dari loop setelah menemukan bagian yang aktif
        }
      }
    }
  };

  // Menjalankan handleScroll saat komponen dimuat dan ketika scrolling terjadi
  useEffect(() => {
    handleScroll(); // Memastikan kondisi awal saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between px-[15%] bg-white-pure py-12 sticky top-0 z-50 ">
        <div>
          <img src={uruzinLogo} className="h-9" alt="uruzin logo" />
        </div>
        <div className="flex gap-14">
          {menuItem.map(({ to, title }) => {
            return (
              <>
                <a
                  href={to}
                  onClick={() => setActiveNav(to)}
                  className={`hover:text-green-uruzin font-poppins font-medium text-[16px] leading-[33px] tracking-[0px] text-dark-blue-uruzin ${
                    activeNav === to ? "text-green-uruzin" : ""
                  }`}
                >
                  {title}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
