import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const UserPage = () => {
  return (
    <div className="userPageContainer">
      <header>
        <nav>
          <Link to="plays">Plays</Link>
          <Link to="bookings">Bookings</Link>
        </nav>
        <section>
          <Link to="admin">Admin</Link>
        </section>
      </header>
      <Outlet />
    </div>
  );
};

export default UserPage;
