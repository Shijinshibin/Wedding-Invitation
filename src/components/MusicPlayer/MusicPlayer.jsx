import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";

import "./MusicPlayer.css";

const MusicPlayer = forwardRef((props, ref) => {

  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({

    playMusic() {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log(err);
        });
      }
    },

    pauseMusic() {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }

  }));

  useEffect(() => {

    if (audioRef.current) {

      audioRef.current.volume = 0.4;

    }

  }, []);

  return (

    <audio
      ref={audioRef}
      loop
      preload="auto"
    >

      <source
        src="/music/wedding.mp3"
        type="audio/mpeg"
      />

    </audio>

  );

});

export default MusicPlayer;