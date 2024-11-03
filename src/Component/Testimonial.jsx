import { motion } from "framer-motion";
import man from "../assets/man.png";
import meal from "../assets/meal.svg";

function Testimonial() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        className="mb-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold flex items-center">
          <span className="text-red-500 mr-2">•</span>
          Crispy, Every Bite Taste
        </h3>
        <p className="text-6xl font-extrabold text-gray-800 mt-4">
          WHAT SOME OF MY CUSTOMERS SAY
        </p>
        <div className="flex space-x-4 justify-end mt-4">
          <button className="w-10 h-10 flex items-center justify-center bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-center bg-yellow-500 p-8 shadow-md rounded-lg"
        initial="hidden"
        animate="visible"
        variants={testimonialVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <blockquote className="text-xl font-semibold text-gray-800">
            “You can’t go wrong with Chicken Mandi. I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it.”
          </blockquote>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={man}
                alt="Profile picture of Khalid Al Dawsry"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-900 font-medium">Khalid Al Dawsry</p>
              <p className="text-gray-700 text-sm">Jeddah, Saudi</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex justify-center">
          <img
            src={meal}
            alt="A delicious Chicken Mandi dish with sides"
            className="w-full h-auto shadow-md rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Testimonial;
