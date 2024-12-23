import React from "react";

// Define the type for the meeting object
interface Meeting {
  id: number;
  name: string;
}

interface ScheduledMeetingsProps {
  meetings: Meeting[]; // Specify that meetings is an array of Meeting objects
}

const ScheduledMeetings: React.FC<{ meetings: Meeting[] }> = ({ meetings }) => {
  return (
    <div>
      <h2>Scheduled Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <strong>{meeting.title}</strong> at {meeting.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledMeetings;
