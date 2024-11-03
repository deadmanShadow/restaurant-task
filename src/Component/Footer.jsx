import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import footerbg from "../assets/footer.jpeg";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center mt-10 text-white"
      style={{
        backgroundImage: `url(${footerbg})`,
        width: "1920px",
        padding: "120px 300px",
        gap: "8px",
        opacity: "1",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 md:p-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
            We Ready to Have You the Best Dining Experiences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center justify-center md:text-left">
          <div>
            <FontAwesomeIcon icon={faClock} className="text-3xl mb-2" />
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-3xl mb-2" />
            <h3 className="text-lg font-semibold">Lets Talk</h3>
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-2" />
            <h3 className="text-lg font-semibold">Book a Table</h3>
            <p>Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl mb-2" />
            <h3 className="text-lg font-semibold">Our Address</h3>
            <p>123 Stree New York City, United States of America</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; 2023 Niomax All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
