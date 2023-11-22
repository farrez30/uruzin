import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Layanan from "../../components/Layanan/Layanan";
import CTA from "../../components/CTA/CTA";
import KomitmenKami from "../../components/KomitmenKami/KomitmenKami";
import KlienKami from "../../components/KlienKami/KlienKami";
import TanyaJawab from "../../components/TanyaJawab/TanyaJawab";
import HubungiKami from "../../components/HubungiKami/HubungiKami";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex-col mx-[15%]">
        <Main />
        {/* <div id="layanan"></div> */}
        <Layanan />
        <CTA />
        <KomitmenKami />
        <KlienKami />
        <TanyaJawab />
        <HubungiKami />
        <Footer />
      </div>
    </>
  );
};

export default Home;
