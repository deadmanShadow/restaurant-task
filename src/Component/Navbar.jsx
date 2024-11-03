import Logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="bg-red-500 px-4 py-3">
      <div className="container mx-auto flex py-4 justify-between items-center">
        <div className="w-1/6">
          <img src={Logo} className="ml-4" alt="Logo" />
        </div>

        <ul className="flex space-x-6 text-white text-lg">
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
        <div className="w-1/6 flex justify-end">
          <button className="bg-yellow-500 text-orange-700 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
            Book a Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
