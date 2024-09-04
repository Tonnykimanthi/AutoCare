import { motion } from "framer-motion";
// Components
import FooterTitle from "../ui/FooterTitle";
// Images
import footerBg from "../../assets/footerBg.svg";
// Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="mt-10 bg-dark bg-cover bg-no-repeat p-16 text-light max-sm:p-5"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:mx-auto max-sm:w-fit max-sm:grid-cols-1">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FooterTitle text="Company" />
          <ul className="mt-5 space-y-1 text-light/90">
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Contact
            </li>
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              News
            </li>
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Careers
            </li>
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Affliate Program
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FooterTitle text="Services" />
          <ul className="mt-5 space-y-1 text-light/90">
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Engine Repair
            </li>
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Brake Repair
            </li>
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Transmission Repair
            </li>
            <li className="cursor-pointer transition-all hover:tracking-wide hover:text-light">
              Suspension & Steering Repair
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.6 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FooterTitle text="Address" />
          <ul className="mt-5 space-y-2 text-light/90">
            <li className="flex items-center gap-x-2">
              <FaLocationDot className="size-5" />
              123 Street, Nairobi, kenya
            </li>
            <li className="flex items-center gap-x-2">
              <FaPhone className="size-5" />
              +254 123 4567
            </li>
            <li className="flex items-center gap-x-2">
              <MdEmail className="size-5" />
              autocare@email.com
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.9 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FooterTitle text="Follow Us" />
          <div className="mt-5 space-x-2">
            <button className="rounded-full border border-light bg-dark p-2 text-light transition duration-300 hover:bg-white hover:text-dark">
              <FaFacebookF className="size-5" />
            </button>
            <button className="rounded-full border border-light bg-dark p-2 text-light transition duration-300 hover:bg-white hover:text-dark">
              <FaXTwitter className="size-5" />
            </button>
            <button className="rounded-full border border-light bg-dark p-2 text-light transition duration-300 hover:bg-white hover:text-dark">
              <FaInstagram className="size-5" />
            </button>
            <button className="rounded-full border border-light bg-dark p-2 text-light transition duration-300 hover:bg-white hover:text-dark">
              <FaLinkedinIn className="size-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
