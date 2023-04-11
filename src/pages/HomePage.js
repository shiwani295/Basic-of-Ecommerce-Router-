import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/HomePage.css";

const HomePage = () => {
  const Navigate = useNavigate();

  const NavigateHandler = () => {
    Navigate("/events");
  };
  return (
    <div className="Home_page">
      <h2>My Home Page</h2>
      <p>
        Go to <Link to="events">All the List Of Events</Link>
      </p>
      {/* navigation using button  */}
      <button onClick={NavigateHandler}>Navigate To Events</button>
    </div>
  );
};

export default HomePage;
