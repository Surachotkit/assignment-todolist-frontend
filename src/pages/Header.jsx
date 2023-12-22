import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
    }, 1000);
  }, [currentTime]);
  return (
    <div className="flex justify-between px-5 items-center h-[7vh] ">
      <div className="flex gap-2 font-bold ">
        <span>Date : </span>
        <span className="text-orange-500">{dayjs().format("YYYY-MM-DD")}</span>
        <span>Time : </span>
        <span className="text-orange-500">{currentTime}</span>
      </div>
    </div>
  );
}
