import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import FormEditTask from "./Content/FormEditTask";
import { useList } from "../hooks/useList";


export default function ProductList({el}) {
// console.log("🚀 ~ file: ProductList.jsx:9 ~ ProductList ~ key:", key)
console.log("🚀 ~ file: ProductList.jsx:9 ~ ProductList ~ el:", el)


const {dataList,
  postList,
  editData,
  deleteData,
  } = useList()


  const [isOpen,setIsOpen] = useState(false)



  const handleEdit = (e) => {
    e.preventDefault()
    // editData(el.id)
    setIsOpen(true)
    // setText(postList)
    
  }
  // console.log(el)
  // const newData = dataList.map(e => e.title)
    // console.log("🚀 ~ file: ProductList.jsx:21 ~ handleEdit ~ newData:", newData)

///move--------------------------------
    const handleSubmit =  (e) => {
      e.preventDefault()
      // editData(el.id, newData)
      //  editData(postList)
      //  editData(idx, postList)
  
  
    }
    useEffect(() => {
      setOldText(oldText.title = el.title )
    },[])
    const handleCancel = () => {
      setIsClose(false); 
    };

    const [ oldText,setOldText] = useState({
      title:""
    })
    console.log("🚀 ~ file: ProductList.jsx:54 ~ ProductList ~ oldText:", oldText)

  return (
    <div className="flex py-2">
      {isOpen ?  <form className="border p-2 rounded-xl w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex w-full px-2 outline-none"
        placeholder="Task Name"
        name="title"
        value={oldText.title}
        // value={el.title}
        onChange={(e) => setOldText({   [e.target.name] : e.target.value })}
        // onChange={(e) => console.log(e)}
      />
      
      <div className="flex justify-end gap-3">
        <button className="bg-gray-200 w-20 rounded-xl hover:bg-gray-300 " >
          Edit Task
        </button>
        <button className="bg-red-500 w-20 rounded-xl hover:bg-red-600 text-white" onClick={handleCancel }>
          Cancel
        </button>
      </div>
    </form>  : 
      (<li className="flex gap-5 items-center justify-evenly w-full text-3xl hover:bg-blue-100 px-6 p-3 rounded-3xl bg-gray-100">
        <div className="w-5 h-5 border-2 border-black"></div>
        <div className="flex flex-1">{el.title} </div>
        <div className="flex justify-center items-center gap-6">
          {/* edit */}
          <FaRegEdit className="text-xl cursor-pointer" onClick={handleEdit}/>
          {/* delete */}
          <MdDelete className="text-2xl cursor-pointer" onClick={() => deleteData(el.id)}/>
        </div>
      </li>)}
    </div>
  );
}
