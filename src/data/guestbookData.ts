export interface GuestbookEntry {
  name: string;
  message: string;
  date: string;
}

const guestbookData: GuestbookEntry[] = [
  {
    name: "John Doe",
    message: "Amazing portfolio! Keep up the great work.",
    date: "2025-07-01",
  },
  {
    name: "Jane Smith",
    message: "Love your IoT projects. Very inspiring!",
    date: "2025-06-20",
  },
];

export default guestbookData;