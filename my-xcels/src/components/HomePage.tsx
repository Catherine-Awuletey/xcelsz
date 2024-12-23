import React, { useState } from "react";
import ScheduleMeeting from "./ScheduleMeeting";
import ScheduledMeetings from "./ScheduledMeetings";

// Define a type for the meeting
interface Meeting {
  id: number;
  title: string;
  time: string;
}

const HomePage: React.FC = () => {
  // Use the Meeting type for the meetings state
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  // Update the function to expect a Meeting type for newMeeting
  const handleMeetingScheduled = (newMeeting: Meeting) => {
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
  };

  return (
    <div>
      <ScheduleMeeting onMeetingScheduled={handleMeetingScheduled} />
      <ScheduledMeetings meetings={meetings} />
    </div>
  );
};

export default HomePage;
