import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import axios from "../utils/axios";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "SCSDB || Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
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
  const getTrendingCards = async () => {
    try {
      const { data } = await axios(`/trending/${category}/day`);
      setTrending(data.results);
      console.log(trending);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrendingCards();
  }, [category]);
  return (
    <>
      <Sidenav />
      {wallpaper ? (
        <div className="w-[80%] h-full overflow-auto">
          <Topnav />
          <Header wallpaper={wallpaper} />
          <div className="p-4 flex justify-between">
            <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>

            <Dropdown title={"Filter"} options={["tv", "movie", "all"]} func={(e)=> setCategory(e.target.value)}/>
          </div>
          <HorizontalCards trending={trending} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Home;
