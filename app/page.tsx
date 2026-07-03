import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UpcomingMatches from "./components/UpcomingMatches";
import Teams from "./components/Teams";
import News from "./components/News";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-zinc-900">
      {/* Ticker Announcement */}
      <Ticker />

      {/* Navigation Header */}
      <Navbar />

      {/* Landing Page Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Banner Section */}
        <Hero />

        {/* Upcoming Matches Section */}
        <UpcomingMatches />

        {/* Teams / Stables Grid Section */}
        <Teams />

        {/* News and Newsletter Section */}
        <News />

        {/* Partners Section */}
        <Partners />
      </main>

      {/* Custom Gaming Footer */}
      <Footer />
    </div>
  );
}
