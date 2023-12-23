import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useList } from "../hooks/useList";
import { TfiCheck } from "react-icons/tfi";

export default function ProductList({ el }) {
  const { editData, deleteData } = useList();
  const [status, setStatus] = useState(Boolean);
  const [isOpen, setIsOpen] = useState(false);
  const [oldText, setOldText] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    editData(el.id, { title: oldText });
  };

  useEffect(() => {
    setOldText(el.title);
    setStatus(el.completed);
  }, []);

  const handleCancel = (e) => {
    setIsOpen(false);
  };

  const handleClickInput = () => {
    setStatus(!status);
  };

  return (
    <div className="flex py-2">
      {isOpen ? (
        <form className="border p-2 rounded-xl w-full">
          <input
            type="text"
            className="flex w-full px-2 outline-none"
            placeholder="Task Name"
            value={oldText}
            onChange={(e) => setOldText(e.target.value)}
          />

          <div className="flex justify-end gap-3">
            <button
              className="bg-green-600 w-20 rounded-xl hover:bg-green-700 text-white "
              onClick={handleSubmit}
            >
              Edit Task
            </button>
            <button
              className="bg-red-500 w-20 rounded-xl hover:bg-red-600 text-white"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <li className=" flex gap-5 items-center justify-evenly w-full text-3xl hover:bg-blue-50 px-6 p-3 rounded-3xl bg-gray-100 ">
          <div
            type="checkbox"
            className={`w-5 h-5 border-2 border-black ${
              status ? "bg-gray-300 " : ""
            }`}
            onClick={handleClickInput}
          >
            <TfiCheck
              className={`relative bottom-4 left-0.5 text-xs ${
                status ? "inline" : "hidden"
              }`}
            />
          </div>
          <div
            className={`flex flex-1 items-center overflow-hidden ${
              status ? "line-through text-gray-300" : ""
            }`}
          >
            <span>{el.title} </span>
          </div>
          <div className="flex justify-center items-center gap-6">
            <FaRegEdit
              className="text-xl cursor-pointer"
              onClick={handleEdit}
            />
            <MdDelete
              className="text-2xl cursor-pointer"
              onClick={() => deleteData(el.id)}
            />
          </div>
        </li>
      )}
    </div>
  );
}
