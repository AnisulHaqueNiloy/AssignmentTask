import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/image3.png";
import Slider from "react-slick";

const PopularItem = () => {
  const [data, setData] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FBF7F2] relative">
      <img
        className="hidden lg:block w-52 h-56 absolute -left-36 -rotate-90 bottom-24"
        src={img}
        alt=""
      />
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="py-20">
          <div className="space-y-3 flex justify-between items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 w-[12px] h-[12px]"></div>
                <h3 className="font-robo text-sm text-red-500">
                  Crispy, Every Bite Taste
                </h3>
              </div>
              <h1 className="text-3xl lg:text-5xl font-nebu">
                popular food items
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-4  ">
                <div className="w-12 h-12 flex items-center justify-center p-5 bg-white rounded-full hover:bg-gray-200">
                  <button>❮</button>
                </div>
                <div className="w-12 h-12 flex items-center justify-center text-red-500 p-5 bg-white rounded-full hover:bg-gray-200">
                  <button>❯</button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl flex flex-col items-center justify-center space-y-3 gap-3 p-5"
                >
                  <div className="flex items-center justify-center">
                    <img className="w-28 h-28" src={item.img} alt="" />
                  </div>
                  <div className="mx-auto border border-b-2 border-b-red-500 w-12"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="font-nebu text-2xl">{item.title}</h1>
                    <p className="font-robo">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden flex justify-center ">
            <div className="flex gap-4  ">
              <div className="w-12 h-12 flex items-center justify-center p-5 bg-white rounded-full hover:bg-gray-200">
                <button>❮</button>
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-red-500 p-5 bg-white rounded-full hover:bg-gray-200">
                <button>❯</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
