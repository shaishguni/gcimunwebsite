// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Committees from "./components/Committees";
import MeetTheTeam from "./components/MeetTheTeam";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >

      <HeroSection />
      <About />
      <Committees />
      <MeetTheTeam />
      <Schedule/>
      <Sponsors/>

    </div>
  );
}
