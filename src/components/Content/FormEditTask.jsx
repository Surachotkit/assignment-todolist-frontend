// // move in ProducList because not can send props === undefined
import React from 'react'

export default function FormEditTask() {
  return (
    <div>FormEditTask</div>
  )
}

// import React, { useState } from "react";
// import { useList } from "../../hooks/useList";

// export default function FormEditTask({el}) {
// // console.log("🚀 ~ file: FormEditTask.jsx:5 ~ FormEditTask ~ el:", el)


// //   console.log("🚀 ~ file: FormEditTask.jsx:5 ~ FormEditTask ~ taskInput:", taskInput)
//   //   console.log("🚀 ~ file: FormEditTask.jsx:4 ~ FormEditTask ~ el:", el);
//   const { postList, setPostList, editData, dataList } = useList();
//   // console.log("🚀 ~ file: FormEditTask.jsx:10 ~ FormEditTask ~ dataList:", dataList)
// //   console.log("🚀 ~ file: FormEditTask.jsx:10 ~ FormEditTask ~ dataList:", dataList.title)
 

//     const [isOpenForm, setIsOpenForm] = useState(false)

//   const [ oldText,setOldText] = useState({
//     title:""
//   })
//   // console.log("🚀 ~ file: FormEditTask.jsx:14 ~ FormEditTask ~ oldText:", oldText)
//   const [taskText, setTaskText] = useState("");
// //   console.log("🚀 ~ file: FormEditTask.jsx:21 ~ FormEditTask ~ taskText:", taskText)

//   const [isClose,setIsClose] = useState(false)
// //   const [taskInput, setTaskInput] = useState(el.title || '')

// // move---------------
//   const handleSubmit =  (e) => {
//     e.preventDefault()
//     editData(el.id, newData)
//     //  editData(postList)
//     //  editData(idx, postList)


//   }

//   const handleCancel = () => {
//     setIsClose(false); 
//   };

//   // const newData = dataList.map((e) => e.title)
//   // console.log("🚀 ~ file: FormEditTask.jsx:24 ~ FormEditTask ~ newData:", newData)

//   return (
    
    
  
//     <form className="border p-2 rounded-xl w-full" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="flex w-full px-2 outline-none"
//         placeholder="Task Name"
//         value={"haha"}
//         // onChange={(e) => setOldText({ ...newData, title: e.target.value })}
//         // onChange={(e) => setTaskText(e.target.value)}
//       />
      
//       <div className="flex justify-end gap-3">
//         <button className="bg-gray-200 w-20 rounded-xl hover:bg-gray-300 " >
//           Edit Task
//         </button>
//         <button className="bg-red-500 w-20 rounded-xl hover:bg-red-600 text-white" onClick={handleCancel }>
//           Cancel
//         </button>
//       </div>
//     </form>
     
//   );
// }
