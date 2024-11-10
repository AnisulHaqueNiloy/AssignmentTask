import { TbToolsKitchen3 } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="bg-red-600 fixed top-0 left-0 w-full z-50 ">
      <div className=" w-11/12 md:w-10/12 mx-auto ">
        <div className=" py-3">
          <div className="flex   justify-between items-center bg-red-600">
            <div className="flex gap-14">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center border border-yellow-500">
                  <p className="bg-yellow-500 rounded-full text-2xl p-1">
                    <TbToolsKitchen3></TbToolsKitchen3>
                  </p>
                </div>
                <a className=" btn-ghost font-robo text-xl">
                  <span className="font-bold font-robo text-2xl text-white">
                    Restau
                  </span>
                  <span className="text-2xl text-white">rant</span>
                </a>
              </div>

              <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li className="font-robo text-sm  text-white/90">
                    <a>Home</a>
                  </li>

                  <li className="font-robo text-sm text-white/90">
                    <a>About</a>
                  </li>

                  <li className="font-robo text-sm text-white/90">
                    <a>Portfolio</a>
                  </li>

                  <li className="font-robo text-sm text-white/90">
                    <a>Clients</a>
                  </li>

                  <li className="font-robo text-sm text-white/90">
                    <a>Blog</a>
                  </li>

                  <li className="font-robo text-sm text-white/90">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 -translate-x-[80px] w-32 p-2 shadow"
                >
                  <li className="font-robo text-sm font-semibold">
                    <a>Home</a>
                  </li>

                  <li className="font-robo text-sm font-semibold">
                    <a>About</a>
                  </li>

                  <li className="font-robo text-sm font-semibold">
                    <a>Portfolio</a>
                  </li>

                  <li className="font-robo text-sm font-semibold">
                    <a>Clients</a>
                  </li>

                  <li className="font-robo text-sm font-semibold">
                    <a>Blog</a>
                  </li>

                  <li className="font-robo text-sm font-semibold">
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
              <a className="cursor-pointer font-robo fontse hidden lg:block bg-yellow-500 px-2 py-1">
                Book A Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
