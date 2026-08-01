import Hero from "../Hero/Hero";
import WeddingDetails from "../WeddingDetails/WeddingDetails";
import Countdown from "../Countdown/Countdown";
import Story from "../Story/Story";
import Couple from "../Couple/Couple";
import Venue from "../Venue/Venue";
import RSVP from "../RSVP/RSVP";
import Footer from "../Footer/Footer";
import Petals from "../Petals/Petals";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

function Invitation() {
  return (
    <>
      <Petals />
      <MusicPlayer />
      <Hero />
      <WeddingDetails />
      <Countdown />
      <Story />
      <Couple />
      <Venue />
      <RSVP />
      <Footer />
    </>
  );
}

export default Invitation;