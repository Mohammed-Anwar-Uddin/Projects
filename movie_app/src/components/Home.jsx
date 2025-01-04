import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/axios";

const Home = () => {
  document.title = "SCSDB || Home";

  const [wallpaper, setWallpaper] = useState(null);
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios(`/trending/all/day`);
      setWallpaper(
        data.results[(Math.random() * data.results.length).toFixed()]
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, []);
  return (
    <>
      <Sidenav />
      {wallpaper ? (
        <div className="w-[80%] h-full">
          <Topnav />
          <Header wallpaper={wallpaper} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Home;
