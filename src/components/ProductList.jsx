import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";


export default function ProductList({el,deleteData,editData,postList,setPostList,dataList,setDataList}) {
console.log("🚀 ~ file: ProductList.jsx:7 ~ ProductList ~ dataList:", dataList)

  const [isOpen,setIsOpen] = useState(false)
  // const [text,setText] = useState(postList)
  // console.log("🚀 ~ file: ProductList.jsx:10 ~ ProductList ~ text:", text)
  // const handleClick = () => {
  //   setIsOpen(!isOpen)
  // } 
  const handleEdit = (e) => {
    e.preventDefault()
    editData(el.id)
    setIsOpen(!isOpen)
    setText(postList)
    
  }
  const newData = dataList.map(e => e.title)
    console.log("🚀 ~ file: ProductList.jsx:21 ~ handleEdit ~ newData:", newData)
  return (
    <div className="flex py-2">
      <li className="flex gap-5 items-center justify-evenly w-full text-3xl hover:bg-blue-100 px-6 p-3 rounded-3xl bg-gray-100">
        <div className="w-5 h-5 border-2 border-black"></div>
        <div className="flex flex-1">{el.title} </div>
        <div className="flex justify-center items-center gap-6">
          <FaRegEdit className="text-xl cursor-pointer" onClick={handleEdit}/>
          {/* คลิกแล้ว เปลี่ยนเป็นฟอร์มสำหรับแก้ไข / condition ลบ edit เปลี่ยนเป็นฟอร์มแทน */}
          {isOpen ? <input
            type="text"
            className=" w-full h-[40px] rounded-3xl px-5 outline-none"
            value={dataList.title}
            onChange={(e) => setDataList({ ...newData, title: e.target.value })}
            placeholder="Add new task"
          /> : null}
          <MdDelete className="text-2xl cursor-pointer" onClick={() => deleteData(el.id)}/>
        </div>
      </li>
    </div>
  );
}
