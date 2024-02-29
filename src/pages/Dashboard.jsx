import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { CgMenuGridR } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import Sidebar from "../components/core/Dashboard/Sidebar"
import { useState } from "react";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  const [flag, setFlag] = useState(false);

  function openSidebar()
  {
    setFlag(!flag);
  }
function closeSideBar(){
  setFlag(false);
}
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]" >
        {flag && <ImCross   className=" cursor-pointer absolute z-20 left-2 top-2 sm:text-white" onClick={closeSideBar} />} 
        {!flag && <CgMenuGridR className="text-white cursor-pointer absolute z-20 left-2 text-3xl" onClick={openSidebar} />}
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
