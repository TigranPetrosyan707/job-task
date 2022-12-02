import { useState, useEffect } from "react";
import TheaterPlay from "../../features/theaterPlay";
import "./styles.css";

const UserPlays = () => {
  const [theaterPlaysData, setTheaterPlaysData] = useState([]);

  useEffect(() => {
    fetch("/theaterPlaysData/theaterPlaysData.json")
      .then((response) => response.json())
      .then((data) => setTheaterPlaysData(data));
  }, []);

  return (
    <div className="theaterPlaysDataContainer">
      {theaterPlaysData.map((theaterPlay) => (
        <TheaterPlay key={theaterPlay.id} theaterPlay={theaterPlay} />
      ))}
    </div>
  );
};

export default UserPlays;
