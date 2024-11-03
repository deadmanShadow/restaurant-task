import Banner from "./Component/Banner";
import Culinary from "./Component/Culinary";
import Items from "./Component/Items";
import Navbar from "./Component/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Culinary />
      <Items />
    </div>
  );
};

export default Layout;
