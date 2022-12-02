import { useSelector } from "react-redux";
import TheaterBookings from "../../features/theaterBookings";
import "./styles.css";

const UserBookings = () => {
  const bookings = useSelector((state) => state.user.bookings);

  return (
    <div className="bookingsSection">
      {bookings.length ? (
        <table>
          <thead>
            <tr>
              <th>Play Name</th>
              <th>Booked Date</th>
              <th>Play Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <TheaterBookings key={booking.id} booking={booking} />
            ))}
          </tbody>
        </table>
      ) : (
        <h2>You don't have any booked theater plays</h2>
      )}
    </div>
  );
};

export default UserBookings;
