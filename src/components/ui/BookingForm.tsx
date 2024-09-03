const BookingForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full max-w-xl rounded-lg border-2 border-secondary/30 bg-dark bg-opacity-50 p-5 backdrop-blur-lg"
    >
      <h4 className="text-center text-2xl font-bold uppercase">
        Book Your Service Appointment
      </h4>
      <div className="mt-4">
        <label className="text-lg font-medium uppercase">Name</label> <br />
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded border border-light/40 bg-light/10 p-3 outline-none transition focus:border-secondary"
        />
      </div>
      <div className="mt-4">
        <label className="text-lg font-medium uppercase">Email</label> <br />
        <input
          type="text"
          placeholder="Your email"
          className="w-full rounded border border-light/40 bg-light/10 p-3 outline-none transition focus:border-secondary"
        />
      </div>
      <div className="mt-4">
        <label className="text-lg font-medium uppercase">Email</label> <br />
        <textarea
          className="w-full rounded border border-light/40 bg-light/10 p-3 outline-none transition focus:border-secondary"
          placeholder="Type your message here"
          rows={5}
        ></textarea>
      </div>
      <button className="mx-auto mt-2 block w-1/2 rounded bg-secondary py-3 transition hover:bg-secondary/80 hover:shadow-lg active:scale-95">
        SUBMIT
      </button>
    </form>
  );
};

export default BookingForm;
