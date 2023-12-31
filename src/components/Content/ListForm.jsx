import { LuListTodo } from "react-icons/lu";
import ProductList from "../ProductList";
import { useList } from "../../hooks/useList";

export default function ListForm() {
  const { dataList, postList, setPostList, postData } = useList();

  return (
    <form
      className="flex justify-center h-[93vh] border "
   
    >
      <div className="">
        <div className="flex justify-center items-center gap-4 text-5xl font-bold p-5">
          <span>To Do List</span>
          <LuListTodo />
        </div>

        <div className="relative py-2">
          <input
            type="text"
            className=" w-full h-[40px] rounded-3xl px-5 outline-none"
            value={postList.title}
            onChange={(e) =>
              setPostList({ ...postList, title: e.target.value })
            }
            placeholder="Add new task"
          />
          <button
            className="bg-red-500 w-28 h-[40px] rounded-3xl absolute right-0 hover:bg-red-600 text-lg text-white"
            onClick={postData}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-xl px-5 py-2 w-[100vh] ">
          {dataList.map((el) => (
            <ProductList key={el.id} el={el} />
          ))}
        </div>
      </div>
    </form>
  );
}
