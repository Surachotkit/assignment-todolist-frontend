import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ListContext = createContext();

export default function ListContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [dataList, setDataList] = useState([]);
  console.log("🚀 ~ file: ListContext.jsx:10 ~ ListContextProvider ~ dataList:", dataList)
  const [postList, setPostList] = useState({
    title: "",
  });
//   const [taskInput, setTaskInput] = useState(title || '')

  const fetchData = async () => {
    try {
      const res = await axios.get("/get");
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async () => {
    try {
      await axios.post("/create", postList);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async (idx, newData) => {
    console.log("🚀 ~ file: ListForm.jsx:32 ~ editData ~ newData:", newData);
    console.log("🚀 ~ file: ListForm.jsx:32 ~ editData ~ idx:", idx);
    try {
      await axios.patch(`/edit/${idx}`, postList);
    //   await axios.patch(`/edit/${idx}`, postList);
      // setDataList(dataList.filter(el => el.id !== idx))
      const newList = dataList.map((oldList) => {
        console.log("🚀 ~ file: ListForm.jsx:38 ~ newList ~ oldList:", oldList);
        if (oldList.id !== idx) {
          return oldList;
        } else {
          return { ...oldList, ...newData };
        }
      });
      console.log("🚀 ~ file: ListContext.jsx:47 ~ newList ~ newList:", newList)
      setDataList(newList);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (idx) => {
    try {
      await axios.delete(`/delete/${idx}`);
      setDataList(dataList.filter((el) => el.id !== idx));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // const handleInput = (e) => {
  //   setSearchItem(e.target.value);
  // };
  // let filterItem = [...dataList];

  // if (searchItem) {
  //   filterItem = dataList.filter((el) => {
  //     if (el.title.toLowerCase().includes(searchItem.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  return (
    <ListContext.Provider
      value={{
        dataList,
        setDataList,
        postList,
        setPostList,
        postData,
        editData,
        deleteData
        
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
