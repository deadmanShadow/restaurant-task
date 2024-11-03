import Banner from "./Component/Banner";
import Culinary from "./Component/Culinary";
import Form from "./Component/Form";
import Items from "./Component/Items";
import Navbar from "./Component/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Culinary />
      <Items />
      <Form />
    </div>
  );
};

export default Layout;
