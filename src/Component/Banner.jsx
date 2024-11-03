import Image from "../assets/image-1.svg";

const Banner = () => {
  return (
    <div className="bg-red-500 flex items-center p-8">
      <div className="w-1/2 flex flex-col items-start ml-64">
        <h1 className="text-6xl font-bold text-white mb-4">
          Taste the authentic <br /> Saudi cuisine
        </h1>
        <p className="text-2xl text-white mb-4">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.{" "}
        </p>
        <button className="bg-yellow-500 text-orange-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
          Explore Menu
        </button>
      </div>

      <div className="w-1/2">
        <img
          src={Image}
          alt="Authentic Saudi Cuisine"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
