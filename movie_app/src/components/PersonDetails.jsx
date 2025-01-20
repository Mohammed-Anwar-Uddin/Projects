import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson } from "../store/actions/personActions";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { removeperson } from "../store/reducers/personSlice";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const [category, setCategory] = useState('movie')
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="px-[5%] w-screen">
      <nav className="text-zinc-300 flex items-center h-[8vh] text-[2vw] gap-[5vw]">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] ri-arrow-left-line cursor-pointer"
        ></Link>
      </nav>
      <div className="w-full flex ">
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
<hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

<div className="text-2xl text-white flex  gap-x-5 ">
          <a
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            target="_blank"
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            target="_blank"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a
            href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            target="_blank"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            target="_blank"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
        

          
        </div>
        <h1 className="text-2xl text-zinc-400 font-semibold my-4">Person Info</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">BirthDay</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">DeathDay</h1>
          <h1 className="text-zinc-400">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Place of Birth</h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Also Known As</h1>
          <h1 className="text-zinc-400">{info.detail.also_known_as.join(", ")}</h1>
        </div>
        

          
         <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">{info.detail.name}</h1>
         <h1 className="text-2xl text-zinc-400 font-semibold my-4">Biography</h1>
          <p className=" text-zinc-400 mt-3">{info.detail.biography}</p>
         <h1 className="text-2xl text-zinc-400 font-semibold my-4">Known For</h1>
          <HorizontalCards trending={info.combinedCredits.cast} />


          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">Acting</h1>
            <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3) border-2 border-zinc-700 p-3]">
            {
              info[category + "Credits"].cast.map((c,i) => (
                <li key={i} className="hover:text-white p-5 rounded hover:bg-[#19191d] duration-300 cursor-pointer">
                  <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {
                      c.name || c.title || c.original_name || c.original_title
                    }
                  </span>
                  <span className="block ml-[21px]">
                    {c.character && `Character Name:  ${c.character}`}
                  </span>
                  </Link>
                </li>
              ))
            }

          </div>


          </div> 
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;