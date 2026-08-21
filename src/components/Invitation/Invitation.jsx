import Hero from "../Hero/Hero";
import WeddingDetails from "../WeddingDetails/WeddingDetails";
import Countdown from "../Countdown/Countdown";
import Story from "../Story/Story";
import Couple from "../Couple/Couple";
import Venue from "../Venue/Venue";

import Footer from "../Footer/Footer";
import Petals from "../Petals/Petals";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Gallery from "../Gallery/Gallery";

function Invitation() {
  return (
    <>
      <Petals />
      <MusicPlayer />
      <Hero />
      <WeddingDetails />
      <Countdown />
      <Story />
      <Gallery />
      <Couple />
      <Venue />
      
      <Footer />
    </>
  );
}

export default Invitation;