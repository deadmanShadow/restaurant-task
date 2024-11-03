import Form from "../assets/form.jpeg";

function ReservationForm() {
  return (
    <div className="relative h-screen bg-black">
      <img
        src={Form}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Reservation Background"
      />
      <div className="relative flex items-center h-full">
        <div className="max-w-md w-full p-8 bg-black bg-opacity-70 shadow-lg rounded-lg text-white ml-48">
          <h2 className="text-lg font-semibold text-red-600 uppercase">
            <span className="text-red-500 mr-2">•</span>
            Book Now
          </h2>
          <h1 className="text-3xl font-bold mb-4">BOOK YOUR TABLE</h1>
          <p className="text-gray-400 mb-8">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="date"
                placeholder="Reservation Date"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="number"
                placeholder="Total People"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-40 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
