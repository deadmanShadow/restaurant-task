import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full p-6 md:p-8 bg-black bg-opacity-70 shadow-lg rounded-lg text-white mx-4 md:mx-48"
        >
          <h2 className="text-lg font-semibold text-red-600 uppercase">
            <span className="text-red-500 mr-2">•</span>
            Book Now
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            BOOK YOUR TABLE
          </h1>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <motion.input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full mt-4 md:mt-0 px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <motion.input
                type="date"
                placeholder="Reservation Date"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.input
                type="number"
                placeholder="Total People"
                className="w-full mt-4 md:mt-0 px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
            <motion.textarea
              placeholder="Message"
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full md:w-40 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              BOOK NOW
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ReservationForm;
