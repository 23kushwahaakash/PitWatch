import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { DASHBOARD_API_ENDPOINT } from "../services/APIs";

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
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default DashBoardPage
