import img from "../assets/bg-2.jpeg";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const section = [
    {
      img: <MdOutlineWatchLater />,
      title: "Opening hours",
      sub1: "Monday - Sunday",
      sub2: "9:00 AM to 11:30 PM",
    },
    {
      img: <MdPhoneInTalk />,
      title: "lets talk",
      sub1: "Phone: 1-800-222-4545",
      sub2: "9:00 AM to 11:30 PM",
    },
    {
      img: <AiOutlineMail></AiOutlineMail>,
      title: "book a table",
      sub1: "Email: demo@website.com",
      sub2: "Support: support@website.com",
    },
    {
      img: <CiLocationOn></CiLocationOn>,
      title: "our address",
      sub1: "123 Street New York City, United",
      sub2: "States Of America.",
    },
  ];
  return (
    <div className="">
      <div className="relative bg-banner bg-cover w-full bg-center bg-no-repeat  bg-[#000000ab] bg-blend-overlay">
        <div className="py-24 w-11/12 md:w-10/12 mx-auto">
          <h1 className="font-nebu font-semi-bold text-3xl md:text-4xl lg:text-6xl text-white text-center">
            We ready to have you the best dining experiences
          </h1>
          <div className="my-10 grid md:grid-cols-4 gap-5">
            {section.map((item, id) => {
              return (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center"
                >
                  <p className="text-3xl text-yellow-500 mb-5">{item.img}</p>
                  <p className="text-3xl text-white font-nebu mb-5">
                    {item.title}
                  </p>
                  <p className="text-white font-light font-robo">{item.sub1}</p>
                  <p className="text-white font-light font-robo">{item.sub2}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-4">
            <span className="text-2xl p-3 rounded-full border border-white text-white">
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </span>
            <span className="text-2xl p-3 rounded-full border border-white text-white">
              <a href="#">
                {" "}
                <FaTwitter></FaTwitter>
              </a>
            </span>
            <span className="text-2xl p-3 rounded-full border border-white text-white">
              <a href="#">
                {" "}
                <FaInstagram></FaInstagram>
              </a>
            </span>
            <span className="text-2xl p-3 rounded-full border border-white text-white">
              <a href="#">
                {" "}
                <FaLinkedin></FaLinkedin>
              </a>
            </span>
          </div>
          <p className="text-center font-robo text-white my-5">
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
