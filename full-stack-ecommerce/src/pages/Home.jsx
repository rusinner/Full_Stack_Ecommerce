import React from "react";
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
  Newsletter,
} from "../components";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
