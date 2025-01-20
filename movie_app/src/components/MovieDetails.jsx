import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie } from "../store/actions/movieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { removemovie } from "../store/reducers/movieSlice";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const MovieDetails = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      className="w-screen h- min-h-screen px-[2vw] pb-[5vw]"
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
          className="hover:text-[#6556cd] ri-arrow-left-line cursor-pointer"
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
          ({info.detail.release_date.split("-")[0]})
        </small>

          </h1>

        <div className="flex text-zinc-100 items-center gap-x-5">
          <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[4vw] h-[4vw] flex justify-center items-center">
            {(info.detail.vote_average * 10).toFixed()}
            <sup>%</sup>
          </span>
          <h1>User Score</h1>
          <h1>{info.detail.release_date}</h1>
          <h1>
            {info.detail.genres.map(g => g.name).join(", ")}
          </h1>
          <h1>{info.detail.runtime} min</h1>


        </div>


<h1 className="text-2xl font-semibold italic">{info.detail.tagline}</h1>
<h1 className="text-xl">Overview</h1>
<p>{info.detail.overview}</p>

<h1 className="text-xl">Movie Translated</h1>
<p className="mb-[.7vw]">{info.translations}</p>


<Link to={`${pathname}/trailer`} className="py-2 px-4 bg-[#6556cd] rounded-lg">
    <i className="text-xl ri-play-fill"></i>
    Play Trailer
</Link>
        </div>


      </div>


      <div className="my-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w,i) => (
              <img
              key={i}
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
            {info.watchproviders.rent.map((w,i) => (
              <img
              key={i}
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
            {info.watchproviders.buy.map((w,i) => (
              <img
              key={i}
                title={w.title}
                className="w-[7vh] rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}
      </div>

      
      <HorizontalCards trending={info.recommendations.length > 0 ? info.recommendations : info.similar}  />

<Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
