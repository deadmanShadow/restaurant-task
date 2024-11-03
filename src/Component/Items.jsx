import burger from "../assets/burger.svg";
import ff from "../assets/ff.svg";
import pizza from "../assets/pizza.svg";
import shrimp from "../assets/shrimp.svg";

const Item = () => {
  return (
    <div className="bg-beige p-6 md:p-10 lg:p-20">
      <h3 className="text-2xl font-bold flex items-center">
        <span className="text-red-500 mr-2">•</span>
        Crispy, Every Bite Taste
      </h3>
      <p className="text-6xl font-extrabold text-gray-800 mt-4">
        Popular Food Items
      </p>

      <div className="right-8 top-1/2 transform -translate-y-1/2 flex space-x-4 justify-end">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100">
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
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="border rounded-md p-4 shadow-md flex flex-col items-center">
          <img
            src={burger}
            className="w-30 h-30 object-cover rounded-md mb-2"
            style={{ width: "120px", height: "120px" }}
            alt="Vegetable Burger"
          />
          <h4 className="text-xl font-semibold text-gray-800 text-center">
            Vegetables Burger
          </h4>
          <p className="text-gray-600 mt-2 text-center">
            Barbecue Italian cuisine pizza.
          </p>
        </div>
        <div className="border rounded-md p-4 shadow-md flex flex-col items-center">
          <img
            src={pizza}
            className="w-30 h-30 object-cover rounded-md mb-2"
            style={{ width: "120px", height: "120px" }}
            alt="Special Pizza"
          />
          <h4 className="text-xl font-semibold text-gray-800 text-center">
            Special Pizza
          </h4>
          <p className="text-gray-600 mt-2 text-center">
            Barbecue Italian cuisine pizza.
          </p>
        </div>
        <div className="border rounded-md p-4 shadow-md flex flex-col items-center">
          <img
            src={ff}
            className="w-30 h-30 object-cover rounded-md mb-2"
            style={{ width: "120px", height: "120px" }}
            alt="Special French Fries"
          />
          <h4 className="text-xl font-semibold text-gray-800 text-center">
            Special French Fries
          </h4>
          <p className="text-gray-600 mt-2 text-center">
            Barbecue Italian cuisine.
          </p>
        </div>
        <div className="border rounded-md p-4 shadow-md flex flex-col items-center">
          <img
            src={shrimp}
            className="w-30 h-30 object-cover rounded-md mb-2"
            style={{ width: "120px", height: "120px" }}
            alt="Cuisine Chicken"
          />
          <h4 className="text-xl font-semibold text-gray-800 text-center">
            Cuisine Chicken
          </h4>
          <p className="text-gray-600 mt-2 text-center">
            Japanese Cuisine Chicken.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
