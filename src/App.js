import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ErrorPage from './pages/404';
import About from './pages/about';
import Contact from './pages/contact';
import Speciality from './pages/speciality';
import Attraction from './pages/attraction';
import WebsiteDesign from './pages/design/website_design';
import Ecommerce from './pages/design/ecommerce';
import Crm from './pages/design/crm';
import MobileApp from './pages/design/mobile_app';
import GraphicDesign from './pages/design/graphic_design';
import SocialMedia from './pages/digital_marketing/social_media';
import SearchEngine from './pages/digital_marketing/search_engine';
import PayPerClick from './pages/digital_marketing/pay_per';
import ContentMarketing from './pages/digital_marketing/content_marketing';
import Branding from './pages/digital_marketing/branding';
import DigitalPr from './pages/digital_marketing/digitalpr';
import WikipediaPage from './pages/digital_marketing/wikipedia_page';
import ScrollToTop from './ScrollToTop';
import Privacy from './pages/privacy';
import OurServiceMain from './pages/our_services_main';
import Privacy_Policy from './pages/privacy_policy';

function App() {
  return (
   <BrowserRouter>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/home" element= {<Home />} />
      <Route path="/privacy_policy" element= {<Privacy_Policy/>} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/about" element= {<About/>} />
      <Route path="/our-services" element= {<OurServiceMain/>} />
  
      <Route path="/website-development-services" element= {<WebsiteDesign/>} />
      <Route path="/e-commerce-website-development" element= {<Ecommerce/>} />
      <Route path="/crm-cms-development-services" element= {<Crm/>} />
      <Route path="/mobile-app-development-company" element= {<MobileApp/>} />
      <Route path="/graphic-design-services" element= {<GraphicDesign/>} />

      <Route path="/social-media-marketing-company" element= {<SocialMedia/>} />
      <Route path="/search-engine-optimization-company" element= {<SearchEngine/>} />
      <Route path="/ppc-pay-per-click-marketing-services" element= {<PayPerClick/>} />
      <Route path="/content-marketing-services" element= {<ContentMarketing/>} />
      <Route path="/branding-services" element= {<Branding/>} />
      <Route path="/digital-pr" element= {<DigitalPr/>} />
      <Route path="/wikipedia-page-creation-service" element= {<WikipediaPage/>} />
      <Route path="/privacy-policy" element= {<Privacy/>} />


      <Route path="*" element={<ErrorPage />} />

    </Routes>

   </BrowserRouter>
  );
}

export default App;
