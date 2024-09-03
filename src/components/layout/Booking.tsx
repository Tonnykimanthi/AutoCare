// Components
import BookingForm from "../ui/BookingForm";
// Images
import bookingImage from "../../assets/booking.avif";

const Booking = () => {
  return (
    <section
      className="mt-8 bg-cover bg-no-repeat text-light"
      style={{
        backgroundImage: `url(${bookingImage})`,
      }}
    >
      <div className="grid place-items-center gap-5 bg-dark bg-opacity-0 p-5 max-sm:px-2 dark:bg-opacity-90">
        <BookingForm />
      </div>
    </section>
  );
};

export default Booking;
