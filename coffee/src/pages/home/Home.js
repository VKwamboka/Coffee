import React from "react";
// import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import Shop from "../../components/shopsec/Shop";

const Home = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
      <Hero />
      <section>
        <Shop/>
      </section>
      <section className="">
        <Info />
      </section>
      {/* <section className="section2">
        <Banner />
      </section> */}
    </div>
  );
};

export default Home;