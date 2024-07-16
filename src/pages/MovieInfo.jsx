import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MovieDetailView from "./MovieDetailView";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieInfo() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // API 호출 코드
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "ko-kr", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU5MmMzNGIyMDU5NTVjZDM2M2YzMGRiYzM5YjljMiIsIm5iZiI6MTcyMDY3NDkyMy42NjIwNzUsInN1YiI6IjY2OGY2OGY3MmI3NWQ5MDIwZWU2ZWExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK5NfoFsZr7QM0m1mYQ2tiTkkbBpDO1R6Thm_W7CTX8",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("API를 불러오지 못했습니다.", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-10 w-[70%] mx-auto">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-[#2c6cf0] text-white mx-auto">
            <div className="relative group">
              <img
                src={`${IMG_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="transition duration-300 ease-in-out"
              />
              <div className="flex flex-col absolute inset-0 bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out justify-center items-center">
                <button className="bg-white text-sm text-black border border-white px-12 py-1 w-[70%] max-w-xs rounded mb-2">
                  예매하기
                </button>
                <NavLink
                  to="/moviedetailview"
                  className="w-[70%] max-w-xs flex justify-center"
                >
                  <button className="bg-white text-sm text-black border border-white px-12 py-1 w-full rounded">
                    상세정보
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="p-3">
              <div className="font-bold h-6 overflow-hidden">{movie.title}</div>
              <div className="flex justify-between mt-2 w-[95%] mx-auto">
                <div className="text-xs">{movie.release_date}</div>
                <div className="text-xs flex items-center">
                  <FaStar className="mr-1" color="yellow" />
                  {movie.vote_average.toFixed(1)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
