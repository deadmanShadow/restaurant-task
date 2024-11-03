import Banner from "./Component/Banner";
import Culinary from "./Component/Culinary";
import Footer from "./Component/Footer";
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
      <Footer />
    </div>
  );
};

export default Layout;
