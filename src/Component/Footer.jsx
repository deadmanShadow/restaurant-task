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
import { motion } from "framer-motion";
import footerbg from "../assets/footer.jpeg";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center mt-10 text-white"
      style={{
        backgroundImage: `url(${footerbg})`,
        padding: "80px 20px",
        opacity: "1",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
            We Are Ready to Provide You with the Best Dining Experience
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center justify-center md:text-left">
          {[
            {
              icon: faClock,
              title: "Opening Hours",
              lines: ["Monday - Sunday", "9:00 AM to 11:30 PM"],
            },
            {
              icon: faPhone,
              title: "Let’s Talk",
              lines: [
                <span>
                  Phone: <a href="tel:18002224545">1-800-222-4545</a>
                </span>,
                "Fax: 1-800-222-4545",
              ],
            },
            {
              icon: faEnvelope,
              title: "Book a Table",
              lines: [
                <span>
                  Email: <a href="mailto:demo@website.com">demo@website.com</a>
                </span>,
                <span>
                  Support:{" "}
                  <a href="mailto:support@website.com">support@website.com</a>
                </span>,
              ],
            },
            {
              icon: faMapMarkerAlt,
              title: "Our Address",
              lines: ["123 Street, New York City, United States of America"],
            },
          ].map(({ icon, title, lines }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FontAwesomeIcon icon={icon} className="text-3xl mb-2" />
              <h3 className="text-lg font-semibold">{title}</h3>
              {lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-6 mt-8"
        >
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-8 text-sm text-gray-400"
        >
          &copy; 2023 Niomax All Rights Reserved
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
