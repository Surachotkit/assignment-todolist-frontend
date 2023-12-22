import { LuListTodo } from "react-icons/lu";
import ProductList from "../ProductList";
import { useState } from "react";
import FormEditTask from "./FormEditTask";
import { useList } from "../../hooks/useList";

export default function ListForm() {
  const [searchItem, setSearchItem] = useState('');
  const {dataList,
    setDataList,
    postList,
    setPostList,
    postData,
    editData,
    deleteData,
    } = useList()

  const [isOpen,setIsOpen] = useState(false)

  const handleSubmit =  (e) => {
    // e.preventDefault()

  }
  console.log(dataList)
  // const handleInput = (e) => {
  //   setSearchItem(e.target.value);
  // };
  // let filterItem = [...dataList];
  // console.log("🚀 ~ file: ListForm.jsx:29 ~ ListForm ~ dataList:", dataList)

  // if (searchItem) {
  //   filterItem = dataList.filter((el) => {
  //     if (el.title.toLowerCase().includes(searchItem.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  return (
    <form className="flex justify-center  h-screen border" onSubmit={handleSubmit}>
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
            value={postList.title}
            onChange={(e) => setPostList({ ...postList, title: e.target.value })}
            placeholder="Add new task"
          />
          <button className="bg-red-500 w-28 h-[40px] rounded-3xl absolute right-0 hover:bg-red-600 text-white" onClick={postData}>Add</button>
        </div>

        {/* item */}
        <div className="flex flex-col bg-white rounded-xl px-5 py-2 w-[100vh] ">
          <span>Date : 20/12/2023</span>
          {/* { dataList ? filterItem.map((el) => <ProductList el={el}/>) : null} */}
          { dataList.map((el) => (<ProductList key={el.id} el={el}   />))}
          <FormEditTask/>
        </div>

      </div>
    </form>
  );
}
  
