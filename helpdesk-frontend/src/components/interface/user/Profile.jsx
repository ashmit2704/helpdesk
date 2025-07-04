import Header from "../../partials/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../partials/Sidebar";

const Profile = () => {
    const navigate = useNavigate();

    const [hoveredStar, setHoveredStar] = useState(null);
    const [hoveredHalf, setHoveredHalf] = useState(null);
    const [selectedStar, setSelectedStar] = useState(null);
    const [selectedHalf, setSelectedHalf] = useState(null);

    const handleMouseMove = (e, i) => {
        const { left, width } = e.target.getBoundingClientRect();
        const x = e.clientX - left;
        if (x < width / 2) {
            setHoveredStar(i);
            setHoveredHalf("left");
        } else {
            setHoveredStar(i);
            setHoveredHalf("right");
        }
    };

    const handleMouseLeave = () => {
        setHoveredStar(null);
        setHoveredHalf(null);
    };

    const handleClick = (i, half) => {
        setSelectedStar(i);
        setSelectedHalf(half);
    };

    return (
    <div className="bg-white min-h-screen">
        <Header/>
        <div className="flex">
            {/* Sidebar */}
            <Sidebar/>
            <div className="flex-1 flex flex-col justify-start pt-4 px-30 bg-white min-h-[calc(100vh-60px)]">
                <h1 className="text-2xl mb-4 ml-10">User Profile</h1>
                <div className="flex flex-row gap-40 mx-8 bg-[#55D6C2]/68 p-10 justify-center h-120">
                    {/* User Profile Card */}
                    <div className="bg-white rounded-3xl shadow-xl min-w-[340px] max-w-[370px] h-78 p-8 flex flex-col items-center relative">
                        {/* Edit Icon */}
                        <button onClick={() => {navigate('/user/edit-profile')}} className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded hover:cursor-pointer">
                            <img src="/edit.png" className="w-5"/>
                        </button>
                        {/* Avatar */}
                        <div className="w-28 h-28 rounded-full bg-[#C4C4C4] flex items-center justify-center mb-6 ">
                            <svg width="60" height="60" fill="black" className="text-[#C4C4C4]" viewBox="0 0 24 24">
                                <circle cx="12" cy="8" r="5"/>
                                <path d="M12 14c-5 0-7 2.5-7 5v1h14v-1c0-2.5-2-5-7-5z"/>
                            </svg>
                        </div>
                        {/* User Info */}
                        <div className="text-left w-full mt-2 text-[17px] font-serif">
                            <div>Username</div>
                            <div>Contact Number</div>
                            <div>Email</div>
                            <div>Department</div>
                        </div>
                    </div>
                    {/* Feedback Card */}
                    <div className="bg-white rounded-3xl shadow-xl px-7 py-6 min-w-[320px] max-w-[340px] h-52 flex flex-col items-center">
                        <div className="text-center text-[15px] font-serif mb-2">Give Your Feedback</div>
                        <input placeholder="[Lorem Ipsum]" className="bg-[#b3b3b3] rounded w-full px-2 py-2 text-[13px] mb-3 text-left"></input>
                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => {
                                // Determine fill for left and right half
                                let leftFill = "#b3b3b3";
                                let rightFill = "#b3b3b3";
                                // Hover logic
                                if (hoveredStar !== null) {
                                    if (i < hoveredStar) {
                                        leftFill = rightFill = "#FFD700";
                                    } else if (i === hoveredStar) {
                                        if (hoveredHalf === "left") {
                                            leftFill = "#FFD700";
                                        } else if (hoveredHalf === "right") {
                                            leftFill = rightFill = "#FFD700";
                                        }
                                    }
                                } else if (selectedStar !== null) {
                                    if (i < selectedStar) {
                                        leftFill = rightFill = "#FFD700";
                                    } else if (i === selectedStar) {
                                        if (selectedHalf === "left") {
                                            leftFill = "#FFD700";
                                        } else if (selectedHalf === "right") {
                                            leftFill = rightFill = "#FFD700";
                                        }
                                    }
                                }
                                return (
                                    <svg
                                        key={i}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="mx-0.5 cursor-pointer"
                                        onMouseMove={e => handleMouseMove(e, i)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={e => {
                                            const { left, width } = e.target.getBoundingClientRect();
                                            const x = e.clientX - left;
                                            handleClick(i, x < width / 2 ? "left" : "right");
                                        }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <defs>
                                            <linearGradient id={`star-gradient-${i}`}>
                                                <stop offset="50%" stopColor={leftFill} />
                                                <stop offset="50%" stopColor={rightFill} />
                                            </linearGradient>
                                        </defs>
                                        <polygon
                                            points="12,3 15,10 22,10 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,10 9,10"
                                            fill={`url(#star-gradient-${i})`}
                                            stroke="#b3b3b3"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                );
                            })}
                        </div>
                        <button className="bg-[#55D6C2] hover:bg-[#25a1a1] hover:cursor-pointer text-black font-serif text-[18px] px-7 py-2 rounded mt-1 shadow transition-all">Submit Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile;