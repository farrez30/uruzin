import React, { useEffect, useRef, useState } from "react";
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
      to: "#tentangkami",
      title: "Tentang Kami",
    },
    {
      to: "#qna",
      title: "QnA",
    },
    {
      to: "#hubungikami",
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
      <div className="flex justify-between px-[15%] bg-white-pure py-12 sticky top-0 z-50">
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



// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState(null);
//   const sections = useRef([]);

//   const handleScroll = () => {
//     const pageYOffset = window.pageYOffset;
//     let newActiveSection = null;

//     sections.current.forEach((section) => {
//       const sectionOffsetTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;

//       if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
//         newActiveSection = section.id;
//       }
//     });

//     setActiveSection(newActiveSection);
//   };

//   useEffect(() => {
//     sections.current = document.querySelectorAll("[data-section]");
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const activeStyle = {
//     fontWeight: "bold",
//     color: "red",
//     textDecoration: "underline",
//   };

//   const menuItem = [
//     {
//       to: "#layanan",
//       title: "Layanan",
//     },
//     {
//       to: "#tentang",
//       title: "Tentang Kami",
//     },
//     {
//       to: "#qna",
//       title: "QnA",
//     },
//     {
//       to: "#hubungi",
//       title: "Hubungi Kami",
//     },
//   ];

//   return (
//     <>
//       {/* <div className="flex justify-between px-[15%] bg-white-pure py-12 sticky top-0 z-50 ">
//         <div>
//           <img src={uruzinLogo} className="h-9" alt="uruzin logo" />
//         </div>
//         <div className="flex gap-14">
//           {menuItem.map(({ to, title }) => {
//             return (
//               <>
//                 <a
//                   href={to}
//                   onClick={() => setActiveNav(to)}
//                   className={`hover:text-green-uruzin font-poppins font-medium text-[16px] leading-[33px] tracking-[0px] text-dark-blue-uruzin ${
//                     activeNav === to ? "text-green-uruzin" : ""
//                   }`}
//                 >
//                   {title}
//                 </a>
//               </>
//             );
//           })}
//         </div>
//       </div> */}

//       {/* //! ///////////////////////////// */}

//       <nav style={{ position: "sticky", top: 0, }} className="bg-dark-blue-uruzin opacity-30 text-white-pure p-8">
//         <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
//           <li className={activeSection === "section1" ? "active" : ""} style={{ margin: "0 10px" }}>
//             <a href="#section1" style={activeSection === "section1" ? activeStyle : {}}>
//               Section 1
//             </a>
//           </li>
//           <li className={activeSection === "section2" ? "active" : ""} style={{ margin: "0 10px" }}>
//             <a href="#section2" style={activeSection === "section2" ? activeStyle : {}}>
//               Section 2
//             </a>
//           </li>
//           <li className={activeSection === "section3" ? "active" : ""} style={{ margin: "0 10px" }}>
//             <a href="#section3" style={activeSection === "section3" ? activeStyle : {}}>
//               Section 3
//             </a>
//           </li>
//         </ul>
//       </nav>
//        {/* //* ///////////////////////////// */}
//       <div style={{ marginTop: "200px" }} className=" border-r-blue-uruzin border-4">
//         <div data-section id="section1" className="h-52 border border-green-uruzin pt-[100px]">
//           {/* Enter section text here */}
//           SEC1
//         </div>
//         <div data-section id="section2" className="h-52 border border-green-uruzin">
//           {/* Enter section text here */}
//           SEC 2
//         </div>
//         <div data-section id="section3" className="h-52 border border-green-uruzin">
//           {/* Enter section text here */}
//           SEC 3
//         </div>
//       </div>
//     </>
//   );
// };

export default Navbar;
