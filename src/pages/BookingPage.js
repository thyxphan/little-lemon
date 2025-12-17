import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, setAvailableTimes }) {
  return (
    <main>
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to book a table.</p>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </main>
  );
}

export default BookingPage;
