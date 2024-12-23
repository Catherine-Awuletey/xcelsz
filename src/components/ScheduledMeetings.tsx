import React from "react";
import { Meeting } from "./HomePage";


const ScheduledMeetings: React.FC<{ meetings: Meeting[] }> = ({ meetings }) => {
  return (
    <div>
      <h2>Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting: Meeting) => (
          <li key={meeting.id}>
            <strong>{meeting.title}</strong> at {meeting.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledMeetings;
