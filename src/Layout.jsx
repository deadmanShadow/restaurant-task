import Banner from "./Component/Banner";
import Culinary from "./Component/Culinary";
import Form from "./Component/Form";
import Items from "./Component/Items";
import Navbar from "./Component/Navbar";
import Testimonial from "./Component/Testimonial";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Culinary />
      <Items />
      <Form />
      <Testimonial />
    </div>
  );
};

export default Layout;
