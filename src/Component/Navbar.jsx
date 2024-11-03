import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-red-500 px-4 py-3">
      <div className="container mx-auto flex flex-wrap py-4 justify-between items-center">
        <div className="w-full md:w-1/6 flex justify-center md:justify-start">
          <img src={Logo} className="ml-4" alt="Logo" />
        </div>

        <ul className="flex flex-col md:flex-row md:space-x-6 text-white text-lg w-full md:w-auto md:justify-center">
          <li className="hover:text-yellow-400">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="#clients">Clients</a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="#blog">Blog</a>
          </li>
        </ul>

        <div className="w-full md:w-1/6 flex justify-center md:justify-end mt-4 md:mt-0">
          <button className="bg-yellow-500 text-orange-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
