import bg from "../assets/image1.jpeg";
import { IoFlowerOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-red-600 pt-14 pb-6 md:py-5">
      <div className=" w-11/12 md:w-10/12 mx-auto ">
        <div className="py-8">
          <div className="grid md:grid-cols-2 items-center  md:my-10 gap-5">
            <div className="space-y-5">
              <p className="text-4xl  lg:text-6xl xl:text-7xl 2xl:text-8xl font-nebu font-bold text-white">
                Taste the authentic Saudi cuisine
              </p>
              <p className="text-white text-lg font-robo">
                Among the best Saudi chefs in the world, serving <br /> you
                something beyond flavor.
              </p>

              <div className="inline-block">
                <p className="bg-yellow-500 px-2 py-1 font-semibold font-robo cursor-pointer">
                  EXPLORE MENU
                </p>
              </div>
            </div>

            <div className="relative">
              {" "}
              <img src={bg} alt="" />
              <p className="text-white text-3xl absolute -right-3 -top-3">
                <IoFlowerOutline></IoFlowerOutline>
              </p>
              <div className="inline-block  absolute bottom-0 -right-14">
                <p className="hidden lg:block text-3xl font-bold font-nebu inline-block px-6 py-5 bg-yellow-500 border border-black rounded-full">
                  TODAY <br />
                  OFFER
                </p>
              </div>
              <div className="inline-block  absolute bottom-0 right-0">
                <p className="lg:hidden text-3xl font-bold font-nebu inline-block px-6 py-5 bg-yellow-500 border border-black rounded-full ">
                  TODAY <br />
                  OFFER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
