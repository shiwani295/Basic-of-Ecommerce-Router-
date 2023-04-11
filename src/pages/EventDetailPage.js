import React from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/EventDetailPage.css";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <div className="Eventdetail">
      <h1>EventDetailPage</h1>
      {params.eventId}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
};

export default EventDetailPage;
//
//   /* when we use use the .. then the click on product1 url = event/1 but we press back it will remove the event/1 but i have to remove only 1 not event/1
//         when you want to remove the 1 only from events/1 se to relative ="path" use karna hoga to id chali jayegi or event show ho jayege   */
// ///////////////////////////////////////
//
//   /* this two .. meanse which is level up one level */
//
