import { useState, useRef } from "react";

import Envelope from "./components/Envelope/Envelope";
import Invitation from "./components/Invitation/Invitation";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [opened, setOpened] = useState(false);

  const musicRef = useRef(null);

  const handleOpen = () => {
    musicRef.current?.playMusic();

    setOpened(true);
  };

  return (
    <>
      {/* Music Player stays mounted */}
      <MusicPlayer ref={musicRef} />

      {!opened ? (
        <Envelope onOpen={handleOpen} />
      ) : (
        <Invitation />
      )}
    </>
  );
}

export default App;