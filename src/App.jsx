import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/slick.css";
import "./assets/css/responsive.css";
import "./assets/css/construction/jquery.localizationTool.css";
import "./App.css";

// import "./assets/css/style2.css";
import "./assets/css/swiper-bundle.min.css";

import "./assets/css/intlTelInput.css";
import "./assets/css/sScrollBar.css";
import "./assets/css/slick-theme.css";
// import "./assets/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Service from "./Components/Services/Services";
import WebDevelopmentSection from "./Components/DevelopmentSect/DevelopmentSec";
// import Industries from "./Components/Industries/IndustryData";
import TechnologiesSection from "./Components/TechnologySection/TechnologySecton";
import Insight from "./Components/Insights/Insights";
import FAQs from "./Components/FaQ/Faq";
import Testimonial from "./Components/TestimonialSection/TestimonialSection";
import MobileAppSlider from "./Components/MobDevSwiper/MobDevSwiper";
import CaseStudySection from "./Components/CaseStudy/CaseStudy";
import AppDevelopment from "./Components/LetDiscuss/LetDiscuss";
function App() {
  return (
    <Router>
      <Navbar />
      <HeroBanner />
      <Service />
      <MobileAppSlider />
      {/* <WebDevelopmentSection /> */}
      {/* <Industries /> */}
      <CaseStudySection />

      <AppDevelopment />
      <TechnologiesSection />
      <Insight />
      <FAQs />
      <Testimonial />
      <Footer />
    </Router>
  );
}

export default App;
