import React, { useEffect, useState } from "react";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [category, setCategory] = useState("movie");
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const navigate = useNavigate();

  const getPopularCards = async () => {
    try {
      const { data } = await axios(`/${category}/popular?page=${page}`);
      if (data.results.length) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setPopular([]);
    setHasmore(true);
    getPopularCards();
  }, [category]);
  return (
    <div className=" w-screen h-fit">
      <div className="flex items-center px-5 ">
        <h1 className="text-[1.5vw] font-semibold text-zinc-400 w-[17%]">
          <i
            onClick={() => navigate(-1)}
            className=" hover:text[#6556cd] ri-arrow-left-line cursor-pointer"
          ></i>
          Popular <small className="text-zinc-600 text-sm">({category})</small>
        </h1>

        <div className="w-[85vw] flex items-center justify-between ">
          <Topnav />

          <div className="w-[50%] flex items-center">
            <Dropdown
              title={"Category"}
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-[2vw]"></div>
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopularCards}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={popular} />
      </InfiniteScroll>
    </div>
  );
};

export default Popular;
