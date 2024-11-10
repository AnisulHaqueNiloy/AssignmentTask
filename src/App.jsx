import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";

import Footer from "./Components/Footer";
import PopularItem from "./Components/PopularItem";
import Form from "./Components/Form";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar></Navbar>
        <Banner></Banner>

        <About></About>

        <PopularItem></PopularItem>
        <Form></Form>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
