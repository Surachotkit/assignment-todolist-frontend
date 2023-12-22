import { IoIosSearch } from "react-icons/io";
import { useList } from "../hooks/useList";

export default function SearchBar() {
  // const {handleInput} = useList()
  return (
    <div className="py-4">
      <div className="flex relative">
        <div className="absolute left-1 top-1 text-2xl">
        <IoIosSearch />
        </div>

        <input
          type="text"
          className="flex justify-center items-center w-full h-3 border py-4  pl-10 rounded-md outline-none "
          placeholder="Search ..."
          // onChange={handleInput}
        ></input>
      </div>
    </div>
  );
}
