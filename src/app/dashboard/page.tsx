
import SideBar from "@/components/SideBar/SideBar";
import ProfissionaisTable from "@/components/ProfissionaisTable.tsx/ProfissionaisTable";
const Dashboard = () =>{

    return(
        <>

        <div  id = "/dashboard" className="flex">
        <SideBar/>
        <ProfissionaisTable />
        </div>
        
        
        </>
    )

}

export default Dashboard;