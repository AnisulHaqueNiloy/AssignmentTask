import { useEffect, useState } from "react";
import img from "../assets/image2.jpeg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaPhoneVolume } from "react-icons/fa6";
import sideimg from "../assets/image3.png";
import { FaBoxOpen } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { FiShoppingBag } from "react-icons/fi";

const About = () => {
  const [tab, settab] = useState([]);
  useEffect(() => {
    fetch("./tabs.json")
      .then((res) => res.json())
      .then((data) => settab(data));
  }, []);

  const title = tab.map((tab, id) => {
    return <Tab key={id}>{tab.heading}</Tab>;
  });

  const text = tab.map((tab, id) => {
    return (
      <TabPanel key={id}>
        {
          <div className="space-y-5 py-5">
            <p className="lg:text-5xl md:text-4xl text-3xl font-bold font-nebu">
              {tab.title}
            </p>
            <p className="font-robo">{tab.description}</p>
          </div>
        }
      </TabPanel>
    );
  });

  const display = (
    <Tabs defaultIndex={1}>
      <TabList>{title}</TabList>
      {text}
    </Tabs>
  );

  const data = [
    {
      img: <FaBoxOpen></FaBoxOpen>,
      title: "Fast delivery",
      desc: "Withing 30 minutes",
    },
    {
      img: <SlBadge></SlBadge>,
      title: "Absolute Dining",
      desc: "Best buffet restaurant",
    },
    {
      img: <FiShoppingBag></FiShoppingBag>,
      title: "Pickup Delivery",
      desc: "Grab Your Food Order",
    },
  ];
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-11/12 md:w-10/12 mx-auto ">
          <div className="">
            <div className="py-10 grid items-center md:grid-cols-2 gap-8 ">
              <div className="relative">
                <img className="w-full h-full" src={img} alt="" />
                <div className="inline-block absolute top-5 left-5 px-2 py-2 z-10 rounded-2xl bg-white flex gap-2 items-center justify-center">
                  <div
                    className="radial-progress text-yellow-500 text-primary  font-robo "
                    style={{ "--value": 80 }}
                    role="progressbar"
                  >
                    50+
                  </div>
                  <p>
                    Market <br /> Experience
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                {display}
                <div className="flex gap-5 items-center">
                  <p className="bg-yellow-500 px-5 py-2 cursor-pointer">
                    About more
                  </p>
                  <p className="text-red-500 flex items-center gap-2">
                    <FaPhoneVolume></FaPhoneVolume>{" "}
                    <span className="text-black font-robo font-bold">
                      +88 3426 739 485
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-5 my-10 ">
              {data.map((item, id) => (
                <div className="flex gap-4 " key={id}>
                  <div className="w-[80px] h-[80px] rounded-full border flex justify-center items-center">
                    <p className="text-4xl text-red-600">{item.img}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="md:text-3xl text-2xl font-nebu font-bold">
                      {item.title}
                    </p>
                    <p className="md:text-2xl text-xl font-robo ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            className=" absolute  bottom-24 -right-32 w-48 h-48 "
            src={sideimg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
