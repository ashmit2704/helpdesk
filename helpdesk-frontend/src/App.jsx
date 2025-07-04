import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgetPassword from "./components/auth/ForgetPassword";
import Dashboard from "./components/interface/user/Dashboard";
import NewTicket from "./components/interface/user/NewTicket";
import MyTicket from "./components/interface/user/MyTicket";
import Profile from "./components/interface/user/Profile";
import EditProfile from "./components/interface/user/EditProfile"
import AdminDashboard from "./components/interface/admin/Dashboard";
import Database from "./components/interface/admin/Database";
import Setting from "./components/interface/admin/Setting";
import UserLogHistory from "./components/interface/admin/UserLogHistory";
import OpteamDashboard from "./components/interface/opteam/Dashboard";
import TicketApproval from "./components/interface/opteam/TicketApproval";
import OpteamMyTicket from "./components/interface/opteam/MyTicket";
import Performance from "./components/interface/opteam/Performance";
import TechDashboard from "./components/interface/techsupport/Dashboard";
import TechMyTicket from "./components/interface/techsupport/MyTicket";
import TechPerformance from "./components/interface/techsupport/Performance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/new-ticket" element={<NewTicket />} />
        <Route path="/user/my-ticket" element={<MyTicket/>} />
        <Route path="/user/profile" element={<Profile/>} />
        <Route path="/user/edit-profile" element={<EditProfile/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/database" element={<Database/>} />
        <Route path="/admin/setting" element={<Setting/>} />
        <Route path="/admin/user-log-history" element={<UserLogHistory/>} />
        <Route path="/opteam/dashboard" element={<OpteamDashboard/>} />
        <Route path="/opteam/ticket-approval" element={<TicketApproval/>} />
        <Route path="/opteam/my-ticket" element={<OpteamMyTicket/>} />
        <Route path="/opteam/performance" element={<Performance/>} />
        <Route path="/techsupport/dashboard" element={<TechDashboard/>} />
        <Route path="/techsupport/my-ticket" element={<TechMyTicket/>} />
        <Route path="/techsupport/performance" element={<TechPerformance/>} />
      </Routes>
    </Router>
  )
}

export default App;