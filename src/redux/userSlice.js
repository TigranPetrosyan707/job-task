import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  bookings: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserName(state, action) {
      state.name = action.payload;
    },
    addBook(state, action) {
      state.bookings.push({
        ...action.payload,
        status: "pending",
        bookingDate: new Date().toLocaleDateString(),
        isFeedback: false,
      });
    },
    approveBooking(state, action) {
      const item = state.bookings.find(
        (booking) => booking.id === action.payload
      );
      item.status = "Approved";
      item.isFeedback = true;
    },
    rejectBooking(state, action) {
      const item = state.bookings.find(
        (booking) => booking.id === action.payload
      );
      item.status = "Reject";
      item.isFeedback = true;
    },
  },
});

export const { addBook, approveBooking, rejectBooking, addUserName } =
  user.actions;
export default user.reducer;
