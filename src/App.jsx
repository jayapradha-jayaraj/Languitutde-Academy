import { BrowserRouter} from "react-router-dom";
import {
    Navbar,Hero,About,Contact,Courses,Testimonials,MemberAccessJsx,Footer, 
} from "./components";
import './index.css' 

const App=()=> {
  return (
  <BrowserRouter> 
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <br></br>
      <br></br>
      <About />
      <Testimonials /> 
      <Contact />
       
      <MemberAccessJsx />
    </div>
    <div className="relative z-0">
    <Footer />
    </div>
  </BrowserRouter>)
};



export default App
