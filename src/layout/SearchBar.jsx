import React from 'react'

export default function SearchBar() {
  return (
    <div className="flex">
      <div className="flex relative ">
        <div className="flex items-center">
          {/* <img src={find} alt="find" className="flex absolute left-1 top-1 h-6 w-6 " /> */}
        </div>

        <input
          type="text"
          className="flex justify-center items-center w-full h-full border py-4  pl-10 rounded-md "
          placeholder="Search ..."
        ></input>
      </div>
    </div>
  );
}
