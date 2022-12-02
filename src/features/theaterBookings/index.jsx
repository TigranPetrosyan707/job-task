const TheaterBookings = ({ booking }) => {
  return (
    <tr>
      <td>{booking.title}</td>
      <td>{booking.bookingDate}</td>
      <td>{booking.date}</td>
      <td>{booking.status}</td>
    </tr>
  );
};

export default TheaterBookings;
