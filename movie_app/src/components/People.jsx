import React, { useEffect, useState } from "react";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const People = () => {
  const [people, setPeople] = useState([]);
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const navigate = useNavigate();

  const getPeopleCards = async () => {
    try {
      const { data } = await axios(`/person/${category}?page=${page}`);
      if (data.results.length) {
        setPeople((prevState) => [...prevState, ...data.results]);
        console.log(data.results);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
      console.log(people);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    if (people.length === 0) {
      getPeopleCards();
    } else {
      setPage(1);
      setPeople([]);
      getPeopleCards();
    }
  };
  useEffect(() => {
    handleRefresh();
  }, [category]);
  return (
    <div className=" w-screen h-fit">
      <div className="flex items-center px-5 ">
        <h1 className="text-[1.5vw] font-semibold text-zinc-400 w-[17%]">
          <i
            onClick={() => navigate(-1)}
            className=" hover:text[#6556cd] ri-arrow-left-line"
          ></i>{" "}
          People
        </h1>

        <div className="w-[85vw] flex items-center justify-between ">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeopleCards}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={people} />
      </InfiniteScroll>
    </div>
  );
};

export default People;
