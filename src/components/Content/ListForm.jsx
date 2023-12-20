import { LuListTodo } from "react-icons/lu";
import SearchBar from "../../features/SearchBar";
import ProductList from "../ProductList";

export default function ListForm() {
  return (
    <div className="flex justify-center  h-screen border">
      <div className="">
        {/* topic */}
        <div className="flex justify-center items-center gap-4 text-5xl font-bold p-5">
          <span>To Do List</span>
          <LuListTodo />
        </div>

        <div className="relative py-2">
          <input
            type="text"
            className=" w-full h-[40px] rounded-3xl px-5 outline-none"
            placeholder="Add new task"
          />
          <button className="bg-red-500 w-28 h-[40px] rounded-3xl absolute right-0 hover:bg-red-600 text-white">Add</button>
        </div>

        {/* item */}
        <div className="flex flex-col bg-white rounded-xl px-5 py-2">
          <span>Date : 20/12/2023</span>
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
     
         
        </div>
      </div>
    </div>
  );
}
