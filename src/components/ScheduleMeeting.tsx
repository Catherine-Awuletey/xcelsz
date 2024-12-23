import React, { useState } from "react";
import { Meeting } from "./HomePage";

interface ScheduleMeetingProps {
  onMeetingScheduled: (newMeeting: Meeting) => void; // Type the prop to accept a meeting object
}

const ScheduleMeeting: React.FC<ScheduleMeetingProps> = ({ onMeetingScheduled }) => {
  const [newMeeting, setNewMeeting] = useState<string>("");

  const handleSubmit = () => {
    if (newMeeting.trim()) {
      const meeting: Meeting = {
        id: Date.now(), // Using current timestamp as a unique ID
        title: newMeeting,
        time: new Date().toLocaleString(),
      };
      onMeetingScheduled(meeting); // Pass the meeting to the parent component
      setNewMeeting(""); // Reset the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newMeeting}
        onChange={(e) => setNewMeeting(e.target.value)}
        placeholder="Enter meeting name"
      />
      <button onClick={handleSubmit}>Schedule Meeting</button>
    </div>
  );
};

export default ScheduleMeeting;
