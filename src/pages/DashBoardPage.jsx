import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { DASHBOARD_API_ENDPOINT } from "../services/APIs";
import Potholes from "../assets/Potholes.png";
import WaterLoggings from "../assets/WaterLoggings.png";
import Fixed from "../assets/Fixed.png";
import ResponseTime from "../assets/ResponseTime.png";
import StatCard from "../components/StatCard";

function DashBoardPage() {
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`${DASHBOARD_API_ENDPOINT}summary/`,
          {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
          withCredentials: true,
        });
        console.log("API Response: ", res.data);        
      }catch(error){
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  },[]);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <div className="flex-1 p-5 bg-[#E9ECF4]/30 overflow-auto">
          <div className="mb-[3%]">
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <p className="text-gray-500">Real-time monitoring and insights</p>
          </div>
          <div className="flex w-full gap-10">
            <StatCard
            icon={WaterLoggings}
            stat="69"
            title="Total Hazards"/>
            <StatCard
            icon={Potholes}
            stat="69"
            title="Rejected"/>
            <StatCard
            icon={Fixed}
            stat="69"
            title="Resolved"/>
            <StatCard
            icon={ResponseTime}
            stat="69"
            title="Pending"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DashBoardPage
