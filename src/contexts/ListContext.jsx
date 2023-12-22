import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

export const ListContext = createContext();

export default function ListContextProvider({ children }) {
  const [dataList, setDataList] = useState([]);
  const [postList, setPostList] = useState({
    title: "",
  });

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
    const body = { id: idx, title: newData?.title };

    try {
      await axios.patch(`/edit/${idx}`, body);
      const newList = dataList.map((oldList) => {
        if (oldList.id !== idx) {
          return oldList;
        } else {
          return { ...oldList, ...newData };
        }
      });

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

  return (
    <ListContext.Provider
      value={{
        dataList,
        setDataList,
        postList,
        setPostList,
        postData,
        editData,
        deleteData,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
