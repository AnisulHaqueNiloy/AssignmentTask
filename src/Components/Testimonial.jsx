import img from "../assets/tomato.png";
import img2 from "../assets/image4.png";
import img3 from "../assets/leaf.png";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStarOfDavid } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Testimonial = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./review.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="bg-[#FBF7F2] relative">
      <img
        className="hidden lg:block w-52 h-56 absolute -left-32 top-28  bottom-24"
        src={img}
        alt=""
      />
      <img
        className="hidden lg:block w-56 h-56 absolute -right-24 rotate-12 bottom-0  bottom-24"
        src={img3}
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
                What some of my customers say
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

          <div className="flex flex-col lg:flex-row ">
            <div className="lg:w-1/3 order-2 lg:order-1 bg-yellow-500 relative overflow-hidden">
              <Slider {...settings}>
                {data.map((d, id) => (
                  <div key={id} className=" ">
                    <div className="box-border  flex flex-col justify-between lg:gap-36  ">
                      <div className="top-0">
                        <p className="font-robo text:sm lg:text-lg ">
                          {" "}
                          &#x275D;{d.review}
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex flex-col gap-1">
                            <p className="font-nebu text-xl">{d.name}</p>
                            <p>{d.country}</p>
                          </div>
                          <div>
                            <img
                              className="w-12 h-12 rounded-full"
                              src={d.img}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="border border-black  bg-black"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <p className="absolute bottom-4 -left-7 text-6xl text-black/50 font-light">
                <FaStarOfDavid />
              </p>
            </div>
            <div className=" lg:w-2/3 order-1 lg:order-2 relative">
              <img className="h-fit" src={img2} alt="" />
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 absolute rounded-full top-[50%] right-[50%] ">
                <p className="">
                  <FaPlay></FaPlay>
                </p>
              </div>
            </div>
          </div>
          <div className="md:hidden flex justify-center mt-5 ">
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

export default Testimonial;
