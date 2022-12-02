import { useDispatch } from "react-redux";
import { approveBooking, rejectBooking } from "../../redux/userSlice";
import "./styles.css";

const AdminBookingsField = ({ booking, userName }) => {
  const dispatch = useDispatch();

  const handleApprove = () => {
    dispatch(approveBooking(booking.id));
  };

  const handleReject = () => {
    dispatch(rejectBooking(booking.id));
  };

  return (
    <>
      <tr>
        <td>{booking.title}</td>
        <td>{booking.bookingDate}</td>
        <td>{userName}</td>
        <td>
          {booking.isFeedback ? (
            <span>{booking.status}</span>
          ) : (
            <>
              <button onClick={handleApprove} className="approveButton">
                Approve
              </button>
              <button onClick={handleReject} className="rejectButton">
                Reject
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default AdminBookingsField;
