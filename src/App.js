import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserName } from "./redux/userSlice";
import UserPage from "./pages/userPage";
import UserPlays from "./pages/userPlays";
import UserBookings from "./pages/userBookings";
import AdminPage from "./pages/adminPage";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const userName = prompt(`Please enter your name  \uD83D\uDE00`);
  dispatch(addUserName(userName));

  return (
    <Routes>
      <Route path="/" element={<UserPage />}>
        <Route path="plays" index element={<UserPlays />} />
        <Route path="bookings" element={<UserBookings />} />
      </Route>
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
