const BookingForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full max-w-xl rounded-lg bg-primary bg-opacity-90 p-5"
    >
      <h4 className="text-center text-2xl font-bold uppercase">
        Book Your Service Appointment
      </h4>
      <div className="mt-4">
        <label className="text-lg font-medium uppercase">Name</label> <br />
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded p-3 text-black outline-none"
        />
      </div>
      <div className="mt-4">
        <label className="text-lg font-medium uppercase">Email</label> <br />
        <input
          type="text"
          placeholder="Your email"
          className="w-full rounded p-3 text-black outline-none"
        />
      </div>
      <div className="mt-4">
        <label className="text-lg font-medium uppercase">Email</label> <br />
        <textarea
          className="w-full rounded p-3 text-black outline-none"
          placeholder="Type your message here"
          rows={5}
        ></textarea>
      </div>
      <button className="mx-auto mt-2 block w-1/2 rounded bg-dark py-3 transition hover:shadow-lg hover:shadow-dark/20">
        SUBMIT
      </button>
    </form>
  );
};

export default BookingForm;
