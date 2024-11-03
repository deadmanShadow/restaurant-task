import { motion } from "framer-motion";
import Image from "../assets/image-1.svg";

const Banner = () => {
  return (
    <div className="bg-red-500 flex flex-col md:flex-row items-center p-8">
      <div className="w-full md:w-1/2 flex flex-col items-start md:ml-16 mb-8 md:mb-0">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Taste the authentic <br /> Saudi cuisine
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </motion.p>
        <motion.button
          className="bg-yellow-500 text-orange-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Explore Menu
        </motion.button>
      </div>

      <div className="w-full md:w-1/2">
        <motion.img
          src={Image}
          alt="Authentic Saudi Cuisine"
          className="object-contain w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </div>
    </div>
  );
};

export default Banner;
