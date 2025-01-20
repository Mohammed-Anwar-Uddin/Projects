import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv } from "../store/actions/tvActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { removetv } from "../store/reducers/tvSlice";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import noImage from '../assets/images/no-image.jpg'

const TvDetails = () => {
  const navigate = useNavigate();
    const {pathname} = useLocation()
    const { info } = useSelector((state) => state.tv);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(asyncloadtv(id));
      return () => {
        dispatch(removetv());
      };
    }, [id]);
    return info ? (
      <div
        className="w-screen h-max px-[2vw] min-h-screen"
        style={{
           background: `
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
        url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})
      `,
          backgroundPosition: "center",
          backgroundSize: "cover",
  
        }}
      >
        <nav className="text-zinc-300 flex items-center h-[8vh] text-[2vw] gap-[5vw]">
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] ri-arrow-left-line"
          ></Link>
          <a href={info.detail.homepage} target="_blank">
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            target="_blank"
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
            target="_blank"
          >
            IMDB
          </a>
        </nav>
  
        <div className="w-full flex text-white py-[2vw]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />
  
          <div className="ml-[3vw]">
            <h1 className="text-5xl font-black text-white">
            {
    info.detail.title || info.detail.name || info.detail.original_title || info.detail.original_name
  }
          <small className="text-2xl font-bold text-zinc-200">
            ({info.detail.first_air_date.split("-")[0]})
          </small>
  
            </h1>
  
          <div className="flex text-zinc-100 items-center gap-x-5">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[4vw] h-[4vw] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1>User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>
              {info.detail.genres.map(g => g.name).join(", ")}
            </h1>
  
  
          </div>
  
  
  <h1 className="text-2xl font-semibold italic">{info.detail.tagline}</h1>
  <h1 className="text-xl">Overview</h1>
  <p>{info.detail.overview}</p>
  
  <h1 className="text-xl">tv Translated</h1>
  <p className="mb-[.7vw]">{info.translations}</p>
  
  
  <Link to={`${pathname}/trailer`} className="py-2 px-4 bg-[#6556cd] rounded-lg ">
      <i className="text-xl ri-play-fill cursor-pointer"></i>
      Play Trailer
  </Link>
          </div>
  
  
        </div>
  
  
        <div className="mt-5">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Platforms</h1>
              {info.watchproviders.flatrate.map((w) => (
                <img
                  title={w.title}
                  className="w-[7vh] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
  
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 my-6 items-center text-white">
              <h1>Available for Rent</h1>
              {info.watchproviders.rent.map((w) => (
                <img
                  title={w.title}
                  className="w-[7vh] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
  
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available to Buy</h1>
              {info.watchproviders.buy.map((w) => (
                <img
                  title={w.title}
                  className="w-[7vh] rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
        </div>
  
<hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
<h1 className="text-3xl font-bold text-white">Seasons</h1>
  <div className="w-[100%] flex gap-x-5 overflow-y-hidden mb-5 p-5">
    {
      info.detail.seasons.map((s, i) => (
        <div key={i} className="w-[15vw]">
        <img className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[85%] min-w-[14vw] object-cover" src={(!s.poster_path && noImage) || `https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="" />
        
        <h1 className="text-2xl text-zinc-300 mt-3 font-semibold text-center">
          {
            s.name || s.title || s.original_name || s.original_title
          }
        </h1>
      </div>

      ))

    }

  </div>
        
        <HorizontalCards trending={info.recommendations.length > 0 ? info.recommendations : info.similar}  />
  
  <Outlet />
      </div>
    ) : (
      <Loading />
    );
}

export default TvDetails