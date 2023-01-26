import React from 'react';
import { useFilterContext } from '../../FilterProvider';
const SearchBar = () => {
  const { data, filterData, setFilterData } = useFilterContext();

  const onChangeLocation = (e) => {
    const location = e.target.value;

    setFilterData(
      data.data.filter((item) =>
        item.attributes.Location.toLowerCase().includes(location.toLowerCase())
      )
    );
  };
  const onChangeGroupSize = (e) => {
    setFilterData(
      data.data.filter((item) => item.attributes.Group === e.target.value)
    );
    console.log(filterData);
  };
  const onChangeMaxPrice = (e) => {
    console.log(e.target.value);
  };

  const onChangeMinPrice = (e) => {
    console.log(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="container relative flex flex-col md:flex-row justify-center items-center m-4 p-10 md:divide-x"
    >
      <input
        type="text"
        className="p-3 w-full md:w-1/4 focus:outline-none "
        placeholder="Search for Location..."
        onChange={onChangeLocation}
      />
      <input
        type="text"
        className="p-3 w-full md:w-1/4 focus:outline-none"
        placeholder="Group Size"
        onChange={onChangeGroupSize}
      />
      <div className="flex flex-row w-full md:w-1/4 focus:outline-none md:divide-x">
        <input
          type="number"
          className="p-3 w-1/2 focus:outline-none "
          placeholder="Min price"
          onChange={onChangeMinPrice}
        />
        <input
          type="number"
          className="p-3 w-1/2  focus:outline-none"
          placeholder="Max price"
          onChange={onChangeMaxPrice}
        />
      </div>
      <button className="text-white w-full md:w-1/4 bg-sky-500 p-3 text-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
