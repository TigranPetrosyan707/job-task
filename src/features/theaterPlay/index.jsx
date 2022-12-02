import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../redux/userSlice";
import "./styles.css";

const TheaterPlay = ({ theaterPlay }) => {
  const [isBooked, setIsBooked] = useState(false);

  const dispatch = useDispatch();

  const bookings = useSelector((state) => state.user.bookings);

  const isBookedItem = bookings.find(
    (booking) => booking.id === theaterPlay.id
  );

  useEffect(() => {
    if (!!isBookedItem) {
      setIsBooked(true);
    }
  }, [isBookedItem]);

  return (
    <div className="theaterPlayContainer">
      <div className="img-box">
        <img src={theaterPlay.image_path} alt="playIMG" />
      </div>
      <div className="content-box">
        <p>«{theaterPlay.title}»</p>
        {isBooked ? (
          <span>booked</span>
        ) : (
          <div className="content-button">
            <button
              onClick={() => {
                dispatch(addBook(theaterPlay));
                setIsBooked(true);
              }}
            >
              Book
            </button>
          </div>
        )}
        <div className="content-info">
          <p className="date">{theaterPlay.date} </p>
          <span>/</span>
          <p className="time">{theaterPlay.time}</p>
        </div>
      </div>
    </div>
  );
};

export default TheaterPlay;
