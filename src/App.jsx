import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Front from "./sections/Front";
import GrowthJourney from "./sections/GrowthJourney";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlobCursor from "./components/BlobCursor";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 2.0,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <>
     
      <Navbar />
      
      <Front />
      <GrowthJourney />
      
    </>
  );
}

export default App;
