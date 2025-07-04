import { useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate();
    const userType = localStorage.getItem('userType');

  return (
    <div className="w-50 bg-[#6A6767]/21 min-h-[calc(100vh-60px)] shadow-md relative">
        {userType === "user" && (
            <div className="pt-7 pl-8">
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/dashboard')}}>
                    <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/new-ticket')}}>
                    <span className="ml-1 mr-2.5"><img src="/NewTicket.png" className="w-5" /></span> New Ticket
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/user/my-ticket')}}>
                    <span className="ml-1 mr-2.5"><img src="/TwoTickets.png" className="w-5" /></span> My Ticket
                </div>
            </div>
        )}
        {userType === "admin" && (
            <div className="pt-7 pl-8">
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/dashboard')}}>
                    <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/database')}}>
                    <span className="ml-1 mr-2.5"><img src="/Database.png" className="w-5" /></span> Database
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/setting')}}>
                    <span className="ml-1 mr-2.5"><img src="/Setting.png" className="w-5" /></span> Setting
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/admin/user-log-history')}}>
                    <span className="ml-1 mr-2.5"><img src="/UserLog.png" className="w-5" /></span> User Log History
                </div>
            </div>
        )}
        {userType === "opteam" && (
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
        )}
        {userType === "techsupport" && (
            <div className="pt-7 pl-8">
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/techsupport/dashboard')}}>
                    <span className="mr-1"><img src="/DashboardLayout.png" className="w-8" /></span> Dashboard
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/techsupport/my-ticket')}}>
                    <span className="ml-1 mr-2.5"><img src="/TwoTickets.png" className="w-5" /></span> My Ticket
                </div>
                <div className="mb-6 flex items-center text-xl cursor-pointer" onClick={() => {navigate('/techsupport/performance')}}>
                    <span className="ml-1 mr-2.5"><img src="/Performance.png" className="w-5" /></span> Performance
                </div>
            </div>
        )}
    </div>
  )
}

export default Sidebar;