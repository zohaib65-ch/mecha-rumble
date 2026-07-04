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
    <div className="flex flex-col  min-h-screen bg-white">
      <Ticker />
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <main className="flex-1 space-y-10 flex flex-col">
          <Hero />
          <UpcomingMatches />
          <Teams />
          <News />
          <Partners />
        </main>
      </div>
      <Footer />
    </div>
  );
}
