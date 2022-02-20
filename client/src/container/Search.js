import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Footer from "../components/Footer";

const Search = ({ query, setQuery, pos, setPos }) => {
  const navigate = useNavigate();

  setPos("fixed");
  // handle click event to fetch search query details and then navigate to search/searchQuery
  const handleClick = async (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };
  useEffect(() => {
    window.localStorage.setItem("query", JSON.stringify(query));
  });

  return (
    <>
      <div className="flex justify-center mt-8 text-stone-800 font-sans font-bold text-3xl md:text-5xl">
        Amazon Search
      </div>
      <div className="search mt-20  flex justify-center">
        <div className="searchCard mx-4  flex justify-start">
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ... "
            value={query}
            className="focus:outline-none shadow-lg shadow-slate-500 w-72 h-10 px-3 pt-1 pb-2 font-semibold font-sans rounded-l-lg border border-slate-700"
          ></input>
          <button
            type="submit"
            onClick={handleClick}
            className=" border w-12 rounded-r-lg px-4 shadow-lg shadow-slate-500  border-slate-700 bg-yellow-400"
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <Footer pos={pos} />
    </>
  );
};

export default Search;
