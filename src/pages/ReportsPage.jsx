import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


function ReportsPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar/>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar/>
        <div className="flex-1 p-5 bg-[#E9ECF4]/30 overflow-auto">
          <div className="mb-[3%]">
            <h1 className="text-2xl font-bold">Hazard Reports</h1>
            <p className="text-gray-500">Comprehensive data table with export options</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ReportsPage
