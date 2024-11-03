import {
  faPhone,
  faShoppingBag,
  faTruck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image2 from "../assets/image-2.svg";

const Culinary = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center md:justify-between bg-white p-4 md:p-10 lg:px-20 lg:py-12">
        <div className="flex-1 relative">
          <img
            src={Image2}
            alt="Culinary Experience"
            className="object-cover rounded-md shadow-lg"
            style={{ width: "617px", height: "460px" }}
          />
          <div className="ml-48 absolute top-1/3 left-4 bg-white rounded-md p-3 shadow-md z-20">
            <p className="text-yellow-500 text-6xl font-bold">50+</p>
            <p className="text-gray-700 text-sm">Market Experiences</p>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0 md:ml-8 lg:ml-12">
          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200">
              About
            </button>
            <button className="px-4 py-1 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-200">
              Experience
            </button>
            <button className="px-4 py-1 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-200">
              Contact
            </button>
          </div>

          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
            Exceptional Culinary Experience and Delicious Food
          </h3>

          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation.
          </p>

          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-200">
              About More
            </button>
            <p className="text-gray-800 font-semibold flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-yellow-500 mr-2"
              />
              +88 3426 739 485
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-around mt-10 md:mt-0 bg-gray-100 p-4 rounded-md">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faTruck}
            className="text-3xl text-red-500 mb-2"
          />
          <p className="text-lg font-bold text-gray-800">Fast Delivery</p>
          <p className="text-gray-600">Within 30 minutes</p>
        </div>

        <div className="text-center">
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-3xl text-red-500 mb-2"
          />
          <p className="text-lg font-bold text-gray-800">Absolute Dining</p>
          <p className="text-gray-600">Best buffet restaurant</p>
        </div>

        <div className="text-center">
          <FontAwesomeIcon
            icon={faShoppingBag}
            className="text-3xl text-red-500 mb-2"
          />
          <p className="text-lg font-bold text-gray-800">Pickup Delivery</p>
          <p className="text-gray-600">Grab your food order</p>
        </div>
      </section>
    </div>
  );
};

export default Culinary;
