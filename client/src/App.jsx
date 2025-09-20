import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home"
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";
import HotelRegistration from "./components/HotelRegistration";
import Layout from "./Pages/HotelOwner/Layout";
import Dashboard from "./pages/hotelOwner/Dashboard";
import ListRoom from "./Pages/hotelOwner/ListRoom";
import AddRoom from "./Pages/hotelOwner/AddRoom";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const isHotelReg = false

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      {isHotelReg && <HotelRegistration />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/rooms" element={<AllRooms />}/>
          <Route path="/rooms/:id" element={<RoomDetails />}/>
          <Route path="/my-bookings" element={<MyBookings />}/>

          {/* owner route  */}
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />}/>
            <Route path="add-room" element={<AddRoom />}/>
            <Route path="list-room" element={<ListRoom />}/>
          </Route>

        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
