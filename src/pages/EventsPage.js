import React from "react";
import { Link } from "react-router-dom";
import "../pages/EventPage.css";

const EventList = [
  { id: 1, title: " Products 1" },
  { id: 2, title: " Products 2" },
  { id: 3, title: " Products 3" },
];
const EventsPage = () => {
  return (
    <>
      <h3 className="EventHead"> The Event Page</h3>
      <ul className="PrductList">
        {EventList.map((evnt) => {
          return (
            <li key={evnt.id}>
              {/* <Link to={`/events/${evnt.id}`}>{evnt.title}</Link> */}
              <Link to={`${evnt.id}`}>{evnt.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventsPage;
