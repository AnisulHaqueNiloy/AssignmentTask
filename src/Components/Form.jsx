const Form = () => {
  return (
    <div className="bg-banner2 bg-cover bg-no-repeat  ">
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="pt-20 pb-10">
          <div className="w-full space-y-3 flex lg:justify-between items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 w-[12px] h-[12px]"></div>
                <h3 className="font-robo text-sm text-red-500">Book Now</h3>
              </div>
              <h1 className="text-3xl lg:text-5xl font-nebu text-white">
                book your table
              </h1>
              <p className="font-robo text-white/80 md:w-2/3">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
            </div>
          </div>

          <div className="py-16">
            <form>
              <div className="flex flex-col md:flex-row gap-5 mb-4 md:w-2/4">
                <input
                  type="text"
                  required
                  placeholder="Your Name*"
                  className="bg-transparent text-white outline-white w-full px-4 py-2 border border-white"
                />

                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="bg-transparent text-white outline-white w-full px-4 py-2 border border-white"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5 mb-4 md:w-2/4">
                <input
                  type="date"
                  required
                  placeholder="Reservation Date"
                  className="bg-transparent text-white outline-white w-full px-4 py-2 border border-white "
                />
                <input
                  type="number"
                  required
                  placeholder="Total People"
                  className="bg-transparent text-white outline-white w-full px-4 py-2 border border-white "
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  id=""
                  placeholder="Message"
                  className="textarea h-[180px] bg-transparent border text-white border-white w-full md:w-2/4   "
                ></textarea>
              </div>
              <div className="bg-yellow-500 inline-block px-2 py-1 font-robo mt-5">
                <button type="submit">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
