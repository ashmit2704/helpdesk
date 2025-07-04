import { useNavigate } from "react-router-dom";
import Header from "../../partials/Header";

const OpteamMyTicket = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
                <img src="/Vector.png" className="w-2.5 absolute top-41.5 left-4"/>
                <div className="pt-7 pl-8">
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/dashboard')}}>
                        <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/ticket-approval')}}>
                        <span className="ml-1 mr-2.5"><img src="/Approval.png" className="w-5" /></span> Ticket Approval
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/my-ticket')}}>
                        <span className="ml-1 mr-2.5"><img src="/TwoTickets.png" className="w-5" /></span> My Ticket
                    </div>
                    <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/opteam/performance')}}>
                        <span className="ml-1 mr-2.5"><img src="/Performance.png" className="w-5" /></span> Performance
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpteamMyTicket;