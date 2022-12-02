import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminBookingsField from "../../features/adminBookingsField";
import "./styles.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (prompt("Confirm password") !== "admin") {
      alert("Incorrect password");
      navigate(-1);
    }
  }, [navigate]);

  return (
    <div className="adminPageContainer">
      <header>
        <Link to="/plays">Plays</Link>
        <Link to="/bookings">Bookings</Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>Play Name</th>
            <th>Spectator Name</th>
            <th>Booked Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.bookings.map((booking) => (
            <AdminBookingsField
              key={booking.id}
              booking={booking}
              userName={user.name}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
