// import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
// import Committees from "./components/Committees";
// import MeetTheTeam from "./components/MeetTheTeam";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Secretariat from "./components/secretariat";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-auto scroll-smooth">
      <HeroSection />
      {/* <About /> */}
      {/* <Committees /> */}
      {/* <MeetTheTeam /> */}
      <Secretariat />
      {/* <Schedule /> */}
      <Sponsors />
    </div>
  );
}
