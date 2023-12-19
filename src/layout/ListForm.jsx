import React from "react";
import { LuListTodo } from "react-icons/lu";
import SearchBar from "./SearchBar";
import ListItem from "../components/ListItem";

export default function ListForm() {
  return (
    <div className="flex justify-center items-center h-[50px] w-[50px] bg-red-500">
      {/* header */}
      <div className="flex bg-gray-500">
        <span>Time</span>
        <SearchBar />
      </div>
      {/* topic */}
      <div>
        <span>To Do List</span>
        <LuListTodo />
      </div>
      {/* item */}
      <div>
        <span>date</span>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
