import React from 'react';

const SearchBar = () => {
  return (
    <form className="container relative flex flex-col md:flex-row justify-center items-center m-4 p-10 md:divide-x divide-y">
      <input
        type="text"
        className="p-3 w-full md:w-2/4 focus:outline-none "
        placeholder="Search for Location..."
      />
      <input
        type="text"
        className="p-3 w-full md:w-1/4 focus:outline-none"
        placeholder="Group Size"
      />
      <div className="flex flex-row md:w-1/4 focus:outline-none md:divide-x divide-y">
        <input
          type="number"
          className="p-3 w-full focus:outline-none "
          placeholder="Min price"
        />
        <input
          type="number"
          className="p-3 w-full focus:outline-none"
          placeholder="Max price"
        />
      </div>
      <button className="text-white md:w-1/4 bg-sky-500 w-full p-3 text-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
