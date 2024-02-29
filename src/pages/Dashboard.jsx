import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Sidebar from "../components/core/Dashboard/Sidebar"
import { useState } from "react";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  const [flag, setFlag] = useState(true);

  function openSidebar()
  {
    setFlag(!flag);
  }
function closeSideBar(){
  setFlag(false);
}
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center ">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]" >
        {flag && <MdOutlineKeyboardDoubleArrowLeft className=" cursor-pointer absolute z-20 left-1 top-[-1] sm:text-[#ffd60a] text-3xl sm:text-5xl " onClick={closeSideBar} />} 
        {!flag && <MdOutlineKeyboardDoubleArrowRight className="text-[#ffd60a] cursor-pointer absolute z-20 left-2 text-5xl" onClick={openSidebar} />}
         {flag &&     <Sidebar  /> }
  
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto"onClick={closeSideBar}>
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
