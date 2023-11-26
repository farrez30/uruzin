import React, { useEffect, useState } from "react";
import { uruzinLogo } from "../../assets/picture";
import { FaBars, FaTimes } from "react-icons/fa";

// * dari flowbite //////////////////////////////
// const Navbar = () => {
//   const [activeNav, setActiveNav] = useState("#");

//   // Fungsi untuk memantau posisi scroll
//   const menuItem = [
//     {
//       to: "#layanan",
//       title: "Layanan",
//     },
//     {
//       to: "#tentangkami",
//       title: "Tentang Kami",
//     },
//     {
//       to: "#qna",
//       title: "QnA",
//     },
//     {
//       to: "#hubungikami",
//       title: "Hubungi Kami",
//     },
//   ];
//   const handleScroll = () => {
//     // Menentukan bagian mana yang sedang aktif berdasarkan posisi scroll
//     for (const section of menuItem) {
//       const elem = document.querySelector(section.to);
//       if (elem) {
//         const rect = elem.getBoundingClientRect();
//         if (rect.top <= 300 && rect.bottom >= 300) {
//           setActiveNav(section.to);
//           break; // Keluar dari loop setelah menemukan bagian yang aktif
//         }
//       }
//     }
//   };

//   // Menjalankan handleScroll saat komponen dimuat dan ketika scrolling terjadi
//   useEffect(() => {
//     handleScroll(); // Memastikan kondisi awal saat komponen dimuat
//     window.addEventListener("scroll", handleScroll);

//     // Membersihkan event listener saat komponen unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>

// <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
//       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

//     </>
//   );
// };
// * dari flowbite //////////////////////////////

// ! Official tailwind navbar version /////////////////////
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <div className="">
//       <Disclosure as="nav" className="bg-gray-uruzin">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 top-0">
//               <div className="relative flex h-16 items-center justify-between">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button*/}
//                   <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-dark-blue-uruzin hover:bg-gray-uruzin hover:text-white-pure focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className="flex flex-shrink-0 items-center">
//                     <img
//                       className="h-8 w-auto"
//                       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                       alt="Your Company"
//                     />
//                   </div>
//                   <div className="hidden sm:ml-6 sm:block">
//                     <div className="flex space-x-4">
//                       {navigation.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className={classNames(
//                             item.current ? 'bg-black-uruzin text-white-pure' : 'text-blue-uruzin hover:bg-gray-uruzin hover:text-white-pure',
//                             'rounded-md px-3 py-2 text-sm font-medium'
//                           )}
//                           aria-current={item.current ? 'page' : undefined}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//             <Disclosure.Panel className="sm:hidden">
//               <div className="space-y-1 px-2 pb-3 pt-2">
//                 {navigation.map((item) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={classNames(
//                       item.current ? 'bg-black-uruzin text-white-pure' : 'text-blue-uruzin hover:bg-gray-uruzin hover:text-white-pure',
//                       'block rounded-md px-3 py-2 text-base font-medium'
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     </div>
//   )
// }
// ! Official tailwind navbar version /////////////////////

// todo: self try improve (for acuan final version (kerjain yang draft version dulu)) /////////////////////////////
// const Navbar = () => {
//   const [activeNav, setActiveNav] = useState("#");

//   // Fungsi untuk memantau posisi scroll
//   const menuItem = [
//     {
//       to: "#layanan",
//       title: "Layanan",
//     },
//     {
//       to: "#tentangkami",
//       title: "Tentang Kami",
//     },
//     {
//       to: "#qna",
//       title: "QnA",
//     },
//     {
//       to: "#hubungikami",
//       title: "Hubungi Kami",
//     },
//   ];
//   const handleScroll = () => {
//     // Menentukan bagian mana yang sedang aktif berdasarkan posisi scroll
//     for (const section of menuItem) {
//       const elem = document.querySelector(section.to);
//       if (elem) {
//         const rect = elem.getBoundingClientRect();
//         if (rect.top <= 300 && rect.bottom >= 300) {
//           setActiveNav(section.to);
//           break; // Keluar dari loop setelah menemukan bagian yang aktif
//         }
//       }
//     }
//   };

//   // Menjalankan handleScroll saat komponen dimuat dan ketika scrolling terjadi
//   useEffect(() => {
//     handleScroll(); // Memastikan kondisi awal saat komponen dimuat
//     window.addEventListener("scroll", handleScroll);

//     // Membersihkan event listener saat komponen unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className="flex justify-between px-[24px] lg:px-[15%] bg-white-pure py-[19px] lg:py-12 sticky top-0 z-50">
//         <div>
//           <img src={uruzinLogo} className="h-[17px] lg:h-9" alt="uruzin logo" />
//         </div>
//         <div className="flex gap-14">
//           {menuItem.map(({ to, title }) => {
//             return (
//               <>
//                 <a
//                   href={to}
//                   onClick={() => setActiveNav(to)}
//                   className={`hidden lg:block hover:text-green-uruzin font-poppins font-medium text-[16px] leading-[33px] tracking-[0px] text-dark-blue-uruzin ${
//                     activeNav === to ? "text-green-uruzin" : ""
//                   }`}
//                 >
//                   {title}
//                 </a>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
// todo: self try improve (for acuan final version (kerjain yang draft version dulu)) /////////////////////////////

// ///////////////////////////////////////////////////

// todo: self try improve (draft version) /////////////////////////////
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

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
      <div class="sticky top-0 z-50 bg-white-pure">
        {/* //! Desktop menu */}
        {/* <divaaaaaaaaaaa className="mx-auto px-4 sm:px-6 lg:px-8"> */}
        <div
          // className="flex items-center justify-between   h-16"
          className="flex justify-between px-[24px] lg:px-[15%] bg-white-pure py-[19px] lg:py-[24px] sticky top-0 z-50"
        >
          <div className="flex items-center">
            <img src={uruzinLogo} className="h-[17px] lg:h-9" alt="uruzin logo" />
          </div>
          {/* //! Navlinks */}
          <div className="hidden lg:block">
            <div className="ml-10 flex gap-14 items-baseline space-x-4">
              {menuItem.map(({ to, title }, index) => {
                return (
                  <a
                    // className="text-light-dark-uruzin transition-all duration-500 hover:bg-light-gray-uruzin hover:text-white-pure px-3 py-2 rounded-md text-md font-poppins font-medium"

                    onClick={() => setActiveNav(to)}
                    className={`hidden lg:block hover:text-green-uruzin font-poppins font-medium text-[16px] leading-[33px] tracking-[0px] text-dark-blue-uruzin transition-all duration-500 ${
                      activeNav === to ? "text-green-uruzin" : ""
                    }`}
                    key={index}
                    href={to}
                  >
                    {title}
                  </a>
                );
              })}
            </div>
          </div>
          {/* //! Conditional Hamburger button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="
              inline-flex items-center justify-center p-2 rounded-md text-black-uruzin 
              hover:text-green-uruzin hover:bg-light-gray-uruzin 
              "
              // onBlur={handleMenu}

              // className="
              // inline-flex items-center justify-center p-2 rounded-md text-black-uruzin
              // hover:text-white-pure hover:bg-gray-uruzin
              // focus:outline-none focus:ring-2 focus:ring-offset-2
              // focus:ring-offset-dark-blue-uruzin focus:ring-white-pure
              // "
            >
              <span className="sr-only">Open Main Menu</span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* </divaaaaaaaaaaa> */}
        {/* //! Mobile-menu */}
        {open ? (
          <div className="lg:hidden bg-white-pure">
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
              {menuItem.map(({ to, title }, index) => {
                return (
                  index !== 2 && (
                    <a
                      className="text-dark-blue-uruzin transition-all duration-500 hover:bg-light-gray-uruzin hover:text-green-uruzin px-3 py-2 rounded-md text-base block font-poppins font-medium"
                      key={index}
                      href={to}
                    >
                      {title}
                    </a>
                  )
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
// todo: self try improve (draft version) /////////////////////////////

// ? Previous navbar ////////////////////////////////
// const Navbar = () => {
//   const [activeNav, setActiveNav] = useState("#");

//   // Fungsi untuk memantau posisi scroll
//   const menuItem = [
//     {
//       to: "#layanan",
//       title: "Layanan",
//     },
//     {
//       to: "#tentangkami",
//       title: "Tentang Kami",
//     },
//     {
//       to: "#qna",
//       title: "QnA",
//     },
//     {
//       to: "#hubungikami",
//       title: "Hubungi Kami",
//     },
//   ];
//   const handleScroll = () => {
//     // Menentukan bagian mana yang sedang aktif berdasarkan posisi scroll
//     for (const section of menuItem) {
//       const elem = document.querySelector(section.to);
//       if (elem) {
//         const rect = elem.getBoundingClientRect();
//         if (rect.top <= 300 && rect.bottom >= 300) {
//           setActiveNav(section.to);
//           break; // Keluar dari loop setelah menemukan bagian yang aktif
//         }
//       }
//     }
//   };

//   // Menjalankan handleScroll saat komponen dimuat dan ketika scrolling terjadi
//   useEffect(() => {
//     handleScroll(); // Memastikan kondisi awal saat komponen dimuat
//     window.addEventListener("scroll", handleScroll);

//     // Membersihkan event listener saat komponen unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className="flex justify-between px-[15%] bg-white-pure py-12 sticky top-0 z-50">
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
//       </div>
//     </>
//   );
// };
// ? Previous navbar ////////////////////////////////

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
