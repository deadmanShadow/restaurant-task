import { useEffect, useState } from "react";
import burger from "../assets/burger.svg";
import ff from "../assets/ff.svg";
import pizza from "../assets/pizza.svg";
import shrimp from "../assets/shrimp.svg";
const items = [
  {
    img: burger,
    title: "Vegetables Burger",
    description: "Barbecue Italian cuisine pizza.",
  },
  {
    img: pizza,
    title: "Special Pizza",
    description: "Barbecue Italian cuisine pizza.",
  },
  {
    img: ff,
    title: "Special French Fries",
    description: "Barbecue Italian cuisine.",
  },
  {
    img: shrimp,
    title: "Cuisine Chicken",
    description: "Japanese Cuisine Chicken.",
  },
];
const Item = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsCount = items.length;
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsCount * 2 - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemsCount * 2 - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  const displayIndex = currentIndex % itemsCount;
  return (
    <div className="bg-beige p-6 md:p-10 lg:p-20">
      <h3 className="text-2xl font-bold flex items-center">
        <span className="text-red-500 mr-2">•</span>
        Crispy, Every Bite Taste
      </h3>
      <p className="text-6xl font-extrabold text-gray-800 mt-4">
        Popular Food Items
      </p>

      <div className="flex space-x-4 justify-end">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={handlePrev}
        >
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
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100"
          onClick={handleNext}
        >
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
        <div className="border rounded-md p-4 shadow-md flex flex-col items-center md:hidden">
          <img
            src={items[displayIndex].img}
            className="object-cover rounded-md mb-2"
            style={{ width: "120px", height: "120px" }}
            alt={items[displayIndex].title}
          />
          <h4 className="text-xl font-semibold text-gray-800 text-center">
            {items[displayIndex].title}
          </h4>
          <p className="text-gray-600 mt-2 text-center">
            {items[displayIndex].description}
          </p>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`border rounded-md p-4 shadow-md flex flex-col items-center hidden md:flex ${
              index === displayIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={item.img}
              className="object-cover rounded-md mb-2"
              style={{ width: "120px", height: "120px" }}
              alt={item.title}
            />
            <h4 className="text-xl font-semibold text-gray-800 text-center">
              {item.title}
            </h4>
            <p className="text-gray-600 mt-2 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Item;
