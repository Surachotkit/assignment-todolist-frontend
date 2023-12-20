import { LuListTodo } from "react-icons/lu";
import ProductList from "../ProductList";
import { useEffect, useState } from "react";
import axios from "../../config/axios";

export default function ListForm() {
  const [dataList, setDataList] = useState([])
  const [postList, setPostList] = useState({
    title:""
  })


  const fetchData = async () => {
    try {
      const res = await axios.get("/get")
      setDataList(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const postData = async () => {
    try {
      await axios.post("/create",postList)
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }

  const editData = async (idx,newData) => {
    console.log("🚀 ~ file: ListForm.jsx:32 ~ editData ~ newData:", newData)
    console.log("🚀 ~ file: ListForm.jsx:32 ~ editData ~ idx:", idx)
    try {
      await axios.patch(`/edit/${idx}`,postList)
      // setDataList(dataList.filter(el => el.id !== idx))
      const newList = dataList.map((oldList) =>   {
        console.log("🚀 ~ file: ListForm.jsx:38 ~ newList ~ oldList:", oldList)
        if(oldList.id !== idx){
          return oldList
        }else{
          return {...oldList, ...newData}
        }
      })
      setDataList(newList)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteData = async (idx) => {
    try {
      await axios.delete(`/delete/${idx}`)
      setDataList(dataList.filter(el => el.id !== idx))

    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    fetchData()
  },[])

  return (
    <form className="flex justify-center  h-screen border" >
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

          {dataList.map((el) => <ProductList key={el.id} el={el} deleteData={deleteData} editData={editData} postList={postList} setPostList={setPostList} dataList={dataList} setDataList={setDataList} />)}
         
        </div>

      </div>
    </form>
  );
}
