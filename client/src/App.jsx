import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/rooms" element={<AllRooms />}/>
          <Route path="/rooms/:id" element={<RoomDetails />}/>
          <Route path="/my-bookings" element={<MyBookings />}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
