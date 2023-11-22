import React from "react";
import { Link } from "react-router-dom";
import { uruzinLogo } from "../../assets/picture";
const Navbar = () => {
  const menuItem = [
    {
      to: "/layanan",
      title: "Layanan",
    },
    {
      to: "/tentang-kami",
      title: "Tentang Kami",
    },
    {
      to: "/qna",
      title: "QnA",
    },
    {
      to: "/hubungikami",
      title: "Hubungi Kami",
    },
  ];
  return (
    <>
      <div className="flex justify-between my-12">
        <div>
          <img src={uruzinLogo} className="h-9" alt="uruzin logo" />
        </div>
        <div className="flex gap-14">
          {menuItem.map(({ to, title }) => {
            return (
              <>
                <Link to={to} className="font-poppins font-medium text-[16px] leading-[33px] tracking-[0px] text-dark-blue-uruzin hover:text-green-uruzin">
                  {title}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
