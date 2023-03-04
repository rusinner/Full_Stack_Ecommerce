import React from "react";
import { FeaturedInfo, PaskooloGraph } from "../../components";
import { userData } from "../../components/paskooloGraph/dummyData";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <PaskooloGraph
        data={userData}
        title="User Analytics"
        grid
        dataKey="ActiveUser"
      />
      <div className="homeWidgets"></div>
    </div>
  );
};

export default Home;
