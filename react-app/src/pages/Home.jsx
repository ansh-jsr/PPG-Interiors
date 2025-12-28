import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import HomeLicense from "../components/HomeLicense";
import HomeContact from "../components/HomeContact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      
      <Hero/>
      <HomeAbout/>
      <HomeServices/>
      <HomeLicense/>
      <HomeContact/>
      

    </>
  );
}
