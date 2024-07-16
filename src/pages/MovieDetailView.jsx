import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetailView() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // API호출 코드
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
        setMovie(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("영화 정보를 불러오지 못했습니다.", error);
      }
    };
    fetchMovies();
  }, []);

  return <>상세페이지</>;
}
