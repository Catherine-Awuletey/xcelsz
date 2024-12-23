// In-memory storage for meetings and users
let meetings = [];
let users = [
    { userId: 1, name: "Alice", availableSlots: ["9:00", "11:00", "14:00"] },
    { userId: 2, name: "Bob", availableSlots: ["10:00", "12:00", "15:00"] },
    { userId: 3, name: "Charlie", availableSlots: ["9:00", "10:00", "11:00"] },
];



// POST /meetings: Create a new meeting
export const CreateMeeting = (req, res) => {
    const { title, userId, timeSlot } = req.body;

    // Validate input
    if (!title || !userId || !timeSlot) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // Check if the user exists
    const user = users.find(u => u.userId === userId);
    if (!user) {
        return res.status(404).json({
            success: false, 
            error: "User not found" 
        });
    }

    // Check if the time slot is available
    if (!user.availableSlots.includes(timeSlot)) {
        return res.status(400).json({ 
            success: false, 
            error: "Time slot not available" 
        });
    }

    // Create a new meeting
    const meeting = {
        meetingId: meetings.length + 1,
        title,
        userId,
        timeSlot,
    };
    meetings.push(meeting);

    return res.status(201).json({ 
        success: true, 
        message: "Meeting created successfully", 
        meeting 
    });
};

// PUT /meetings/:meetingId: Update (reschedule) a meeting
export const UpdateMeeting = (req, res) => {
    const { meetingId } = req.params;
    const { title, userId, timeSlot } = req.body;

    // Find the meeting
    const meeting = meetings.find(m => m.meetingId === parseInt(meetingId));
    if (!meeting) {
        return res.status(404).json({ error: "Meeting not found" });
    }

    // Validate input
    if (!title || !userId || !timeSlot) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if the user exists
    const user = users.find(u => u.userId === userId);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    // Check if the time slot is available
    if (!user.availableSlots.includes(timeSlot)) {
        return res.status(400).json({ error: "Time slot not available" });
    }

    // Update the meeting details
    meeting.title = title;
    meeting.userId = userId;
    meeting.timeSlot = timeSlot;

    return res.status(200).json({ message: "Meeting updated successfully", meeting });
};

// DELETE /meetings/:meetingId: Delete a meeting
export const DeleteMeeting = (req, res) => {
    const { meetingId } = req.params;

    // Find the index of the meeting to delete
    const meetingIndex = meetings.findIndex(m => m.meetingId === parseInt(meetingId));
    if (meetingIndex === -1) {
        return res.status(404).json({ error: "Meeting not found" });
    }

    // Remove the meeting from the array
    meetings.splice(meetingIndex, 1);

    return res.status(200).json({ message: "Meeting deleted successfully" });
};

// GET /users/:userId/available-slots: Get available slots for a user
export const GetUserAvailableSlots = (req, res) => {
    const { userId } = req.params;

    // Find the user
    const user = users.find(u => u.userId === parseInt(userId));
    if (!user) {
        return res.status(404).json({ success: false,error: "User not found" });
    }

    // Return the available slots
    return res.status(200).json({ success: true ,availableSlots: user.availableSlots });
};
