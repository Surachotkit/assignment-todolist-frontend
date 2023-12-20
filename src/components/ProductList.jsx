import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


export default function ProductList({el,deleteData}) {

  return (
    <div className="flex py-2">
      <li className="flex gap-5 items-center justify-evenly w-full text-3xl hover:bg-blue-100 px-6 p-3 rounded-3xl bg-gray-100">
        <div className="w-5 h-5 border-2 border-black"></div>
        <div className="flex flex-1">{el.title} </div>
        <div className="flex justify-center items-center gap-6">
          <FaRegEdit className="text-xl cursor-pointer" />
          <MdDelete className="text-2xl cursor-pointer" onClick={() => deleteData(el.id)}/>
        </div>
      </li>
    </div>
  );
}
