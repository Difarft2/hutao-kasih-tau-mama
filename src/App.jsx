import { useRef, useState, useLayoutEffect } from "react";

import { Howl } from "howler";
import gsap from "gsap";

import PlayButton from "./components/PlayButton";
import Timeline1 from "./components/Timeline1";
import Timeline2 from "./components/Timeline2";
import Timeline3 from "./components/Timeline3";
import Timeline4 from "./components/Timeline4";
import Transisi1 from "./components/Transisi1";
import Timeline5 from "./components/Timeline5";
import Timeline6 from "./components/Timeline6";

import "./app.css";

function App() {
  const [started, setStarted] = useState(false);

  const timeline1Ref = useRef(null);
  const kasihRef = useRef(null);
  const tauRef = useRef(null);
  const mamahRef = useRef(null);

  const ajakRef = useRef(null);
  const kuRef = useRef(null);
  const bertemuRef = useRef(null);

  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);

  const timeline3ImageRef = useRef(null);

  const kapanRef = useRef(null);
  const dimanaRef = useRef(null);
  const danRef = useRef(null);

  const image7Ref = useRef(null);
  const image8Ref = useRef(null);
  const image9Ref = useRef(null);

  const esokRef = useRef(null);
  const lusaRef = useRef(null);
  const atauRef = useRef(null);
  const malamRef = useRef(null);

  const transisi1Ref = useRef(null);

  const image10Ref = useRef(null);
  const image11Ref = useRef(null);
  const image12Ref = useRef(null);
  const image13Ref = useRef(null);
  const image14Ref = useRef(null);

  const malam1Ref = useRef(null);
  const minggu1Ref = useRef(null);

  const malam2Ref = useRef(null);
  const minggu2Ref = useRef(null);

  const jadiRef = useRef(null);
  const kapan2Ref = useRef(null);
  const ketemuRef = useRef(null);

  const image15Ref = useRef(null);
  const heheRef = useRef(null);

  const music = useRef(
    new Howl({
      src: ["/audio/lagu.mp3"],
      html5: false,
      preload: true,
    }),
  );

  useLayoutEffect(() => {
    if (!started) return;

    requestAnimationFrame(() => {
      music.current.play();

      const tl = gsap.timeline();

      //Timeline 1
      tl.fromTo(
        timeline1Ref.current,

        {
          y: 500,
          x: -200,

          rotate: 50,

          scale: 1.4,

          opacity: 0,
        },

        {
          y: 0,
          x: 0,

          rotate: 0,

          scale: 1,

          opacity: 1,

          duration: 1,

          ease: "power3.out",
        },
      );

      //kasih
      tl.fromTo(
        kasihRef.current,

        {
          y: 100,
          opacity: 0,
          scale: 0.5,
        },

        {
          y: 0,
          opacity: 1,
          scale: 1.1,

          duration: 0.3,

          ease: "back.out(2)",
        },

        "-=1",
      );

      //tau
      tl.fromTo(
        tauRef.current,

        {
          y: 100,
          opacity: 0,
          scale: 0.5,
        },

        {
          y: 0,
          opacity: 1,
          scale: 1.1,

          duration: 0.3,

          ease: "back.out(2)",
        },
        "-=0.8",
      );

      //mamah
      tl.fromTo(
        mamahRef.current,

        {
          y: 100,
          opacity: 0,
          scale: 0.5,
        },

        {
          y: 0,
          opacity: 1,
          scale: 1.1,

          duration: 0.3,

          ease: "back.out(2)",
        },
        "-=0.8",
      );

      //Timeline 1 to Timeline 2

      tl.to(
        [
          timeline1Ref.current,
          kasihRef.current,
          tauRef.current,
          mamahRef.current,
        ],
        {
          opacity: 0,

          duration: 0.15,

          scale: 1.2,
        },
      );

      //Timeline 2

      //Beat duration
      const beat = 0.7;

      //Timeline 2 start time
      const timeline2Start = tl.duration();

      //Image 2
      tl.fromTo(
        image2Ref.current,

        {
          opacity: 0,
          scale: 1.3,
        },

        {
          opacity: 0.8,
          scale: 1,

          duration: 0.5,

          ease: "power3.out",
        },

        timeline2Start + 0 * beat,
      );

      tl.to(
        image2Ref.current,
        {
          opacity: 0,

          duration: 0.25,
        },

        timeline2Start + 0.8 * beat,
      );

      //Image 3
      tl.fromTo(
        image3Ref.current,

        {
          opacity: 0,
          scale: 1.25,
        },

        {
          opacity: 0.8,
          scale: 1,

          duration: 0.25,

          ease: "power2.out",
        },

        timeline2Start + 1 * beat,
      );

      tl.to(
        image3Ref.current,
        {
          opacity: 0,

          duration: 0.15,
        },

        timeline2Start + 1.35 * beat,
      );

      //Image 4
      tl.fromTo(
        image4Ref.current,

        {
          opacity: 0,
          scale: 1.25,
        },

        {
          opacity: 0.8,
          scale: 1,

          duration: 0.25,

          ease: "power2.out",
        },

        timeline2Start + 1.4 * beat,
      );

      tl.to(
        image4Ref.current,
        {
          opacity: 0,

          duration: 0.15,
        },

        timeline2Start + 1.75 * beat,
      );

      //Image 5
      tl.fromTo(
        image5Ref.current,

        {
          opacity: 0,
          scale: 1.4,
        },

        {
          opacity: 0.8,
          scale: 1,

          duration: 0.7,

          ease: "power3.out",
        },

        timeline2Start + 1.8 * beat,
      );

      //Image 5 to Texts
      tl.to(
        [image5Ref.current, ajakRef.current, kuRef.current, bertemuRef.current],
        {
          opacity: 0,

          scale: 1.1,

          duration: 0.25,

          ease: "power2.out",
        },

        timeline2Start + 3 * beat,
      );

      //texts

      //ajak
      tl.fromTo(
        ajakRef.current,

        {
          y: 80,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.35,

          ease: "power3.out",
        },

        timeline2Start + 0.2 * beat,
      );

      //ku
      tl.fromTo(
        kuRef.current,

        {
          y: 80,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.35,

          ease: "power3.out",
        },

        timeline2Start + 1.2 * beat,
      );

      //bertemu
      tl.fromTo(
        bertemuRef.current,

        {
          y: 80,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.35,

          ease: "power3.out",
        },

        timeline2Start + 2 * beat,
      );

      //hide texts
      tl.to(
        [ajakRef.current, kuRef.current, bertemuRef.current],
        {
          opacity: 0,

          scale: 1.1,

          duration: 0.25,

          ease: "power2.out",
        },

        timeline2Start + 3.8 * beat,
      );

      //Timeline 3
      const timeline3Start = tl.duration() - 0.8;

      //Image 6
      tl.to(
        timeline3ImageRef.current,
        {
          x: 400,

          opacity: 1,

          duration: 1,

          ease: "power3.out",
        },

        timeline3Start,
      );

      //kapan
      tl.to(
        kapanRef.current,
        {
          y: 0,

          opacity: 1,

          duration: 0.4,

          ease: "back.out(2)",
        },

        timeline3Start + 0.3,
      );

      //dimana
      tl.to(
        dimanaRef.current,
        {
          y: 0,

          opacity: 1,

          duration: 0.4,

          ease: "back.out(2)",
        },

        timeline3Start + 0.6,
      );

      //&
      tl.to(
        danRef.current,
        {
          y: 0,

          opacity: 1,

          rotation: 0,

          duration: 0.4,

          ease: "back.out(3)",
        },

        timeline3Start + 0.8,
      );

      //hiden
      tl.to(
        [
          timeline3ImageRef.current,
          kapanRef.current,
          dimanaRef.current,
          danRef.current,
        ],
        {
          opacity: 0,

          y: 50,

          scale: 0.9,

          duration: 0.3,

          ease: "power2.out",
        },

        timeline3Start + 1.6,
      );

      //Timeline 4
      const timeline4Start = tl.duration() - 0.2;

      const beat4 = 0.6;

      //gambar 7
      tl.fromTo(
        image7Ref.current,

        {
          opacity: 0,
          scale: 1.3,
        },

        {
          opacity: 1,
          scale: 1,

          duration: 0.4,

          ease: "power3.out",
        },

        timeline4Start + 0 * beat4,
      );

      tl.to(
        image7Ref.current,
        {
          opacity: 0,

          duration: 0.15,
        },

        timeline4Start + 0.8 * beat4,
      );

      //gambar 8
      tl.fromTo(
        image8Ref.current,

        {
          opacity: 0,
          scale: 1.3,
        },

        {
          opacity: 1,
          scale: 1,

          duration: 0.4,

          ease: "power3.out",
        },

        timeline4Start + 1 * beat4,
      );

      tl.to(
        image8Ref.current,
        {
          opacity: 0,

          duration: 0.15,
        },

        timeline4Start + 1.8 * beat4,
      );

      //gambar 9
      tl.fromTo(
        image9Ref.current,

        {
          opacity: 0,
          scale: 1.4,
        },

        {
          opacity: 1,
          scale: 1,

          duration: 0.8,

          ease: "power3.out",
        },

        timeline4Start + 2 * beat4,
      );

      //texts

      //ESOK
      tl.fromTo(
        esokRef.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.3,

          ease: "back.out(2)",
        },

        timeline4Start + 0.2 * beat4,
      );

      tl.to(
        esokRef.current,
        {
          opacity: 0,

          y: -50,

          duration: 0.15,
        },

        timeline4Start + 0.9 * beat4,
      );

      //lusa
      tl.fromTo(
        lusaRef.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.3,

          ease: "back.out(2)",
        },

        timeline4Start + 1.1 * beat4,
      );

      tl.to(
        lusaRef.current,
        {
          opacity: 0,

          y: -50,

          duration: 0.15,
        },

        timeline4Start + 1.8 * beat4,
      );

      //atau
      tl.fromTo(
        atauRef.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,

          ease: "back.out(2)",
        },

        timeline4Start + 2 * beat4,
      );

      tl.to(
        atauRef.current,
        {
          opacity: 0,

          y: -50,

          duration: 0.15,
        },

        timeline4Start + 2.5 * beat4,
      );

      //MALAM MINGGU
      tl.fromTo(
        malamRef.current,

        {
          y: 120,
          opacity: 0,

          scale: 0.8,
        },

        {
          y: 0,
          opacity: 1,

          scale: 1,

          duration: 0.45,

          ease: "back.out(2)",
        },

        timeline4Start + 2.7 * beat4,
      );

      //hide timeline 4
      tl.to(
        [
          image7Ref.current,
          image8Ref.current,
          image9Ref.current,

          esokRef.current,
          lusaRef.current,
          atauRef.current,
          malamRef.current,
        ],
        {
          opacity: 0,

          scale: 1.1,

          filter: "blur(10px)",

          duration: 0.3,

          ease: "power2.out",
        },

        timeline4Start + 4 * beat4,
      );

      //transisi 1
      tl.to(
        transisi1Ref.current,
        {
          opacity: 1,

          duration: 0.1,
        },
        "-=0.4",
      );

      tl.to(
        transisi1Ref.current,
        {
          background: "white",

          duration: 0.1,
        },
        "-=0.1",
      );

      tl.to(
        transisi1Ref.current,
        {
          opacity: 0,

          duration: 0.1,
        },
        "-=0.1",
      );

      //Timeline 5
      const timeline5Start = tl.duration() + 0.2;

      let repeated = false;

      tl.add("timeline5", timeline5Start);

      //Image 10
      tl.fromTo(
        image10Ref.current,

        {
          opacity: 0,
          scale: 2,
        },

        {
          opacity: 1,
          scale: 1,

          duration: 0.6,

          ease: "power3.out",
        },

        timeline5Start,
      );

      tl.to(
        image10Ref.current,
        {
          x: -900,

          duration: 0.5,
          opacity: 0,

          ease: "power2.inOut",
        },

        timeline5Start + 0.6,
      );

      //Image 11
      tl.fromTo(
        image11Ref.current,

        {
          opacity: 0,
          x: 600,
        },

        {
          opacity: 1,
          x: 0,

          duration: 0.5,

          ease: "power3.out",
        },

        timeline5Start + 0.7,
      );

      //Text MALAM MINGGU 1
      tl.fromTo(
        malam1Ref.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 1,
      );

      tl.fromTo(
        minggu1Ref.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 1.3,
      );

      //hide Text MALAM MINGGU 1
      tl.to(
        [malam1Ref.current, minggu1Ref.current],
        {
          y: -100,
          opacity: 0,

          duration: 0.25,
        },

        timeline5Start + 1.8,
      );

      //Image 11 hide
      tl.to(
        image11Ref.current,
        {
          x: 900,
          opacity: 0,

          duration: 0.5,

          ease: "power2.inOut",
        },

        timeline5Start + 1.8,
      );

      //Image 12
      tl.fromTo(
        image12Ref.current,

        {
          opacity: 0,
          x: 600,
        },

        {
          opacity: 1,
          x: 0,

          duration: 0.4,
        },

        timeline5Start + 2,
      );

      //text MALAM MINGGU 2
      tl.fromTo(
        malam2Ref.current,

        {
          y: -100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 2.4,
      );

      tl.fromTo(
        minggu2Ref.current,

        {
          y: -100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 2.7,
      );

      //hide text MALAM MINGGU 2
      tl.to(
        [malam2Ref.current, minggu2Ref.current],
        {
          y: 100,
          opacity: 0,

          duration: 0.25,
        },

        timeline5Start + 3.2,
      );

      //Image 12 hide
      tl.to(
        image12Ref.current,
        {
          x: -600,
          opacity: 0,

          duration: 0.4,
        },

        timeline5Start + 3.2,
      );

      //Image 13
      tl.fromTo(
        image13Ref.current,

        {
          opacity: 0,
          x: -600,
        },

        {
          opacity: 1,
          x: 0,

          duration: 0.4,
        },

        timeline5Start + 3.4,
      );

      //Text MALAM MINGGU 1 lagi
      tl.fromTo(
        malam1Ref.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 3.6,
      );

      tl.fromTo(
        minggu1Ref.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 3.8,
      );

      //hide text MALAM MINGGU 1 lagi
      tl.to(
        [malam1Ref.current, minggu1Ref.current],
        {
          y: -100,
          opacity: 0,

          duration: 0.25,
        },

        timeline5Start + 4.5,
      );

      //hide Image 13
      tl.to(
        image13Ref.current,
        {
          x: -700,
          opacity: 0,

          duration: 0.4,
        },

        timeline5Start + 4.8,
      );

      //text akhir
      tl.fromTo(
        jadiRef.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 5.4,
      );

      tl.fromTo(
        kapan2Ref.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.25,
        },

        timeline5Start + 5.6,
      );

      tl.fromTo(
        ketemuRef.current,

        {
          y: 100,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,

          duration: 0.35,
        },

        timeline5Start + 5.8,
      );

      //hide text akhir
      tl.to(
        [jadiRef.current, kapan2Ref.current, ketemuRef.current],
        {
          y: 100,
          opacity: 0,

          duration: 0.25,
        },

        timeline5Start + 6.5,
      );

      tl.addLabel("timeline5End");

      tl.call(() => {
        if (!repeated) {
          repeated = true;

          gsap.delayedCall(1, () => {
            tl.play("timeline5");
          });
        }
      });

      //Timeline 6
      const timeline6Start = "timeline5End+=0.5";

      tl.fromTo(
        image15Ref.current,
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 1,

          ease: "power3.out",
        },

        timeline6Start,
      );

      tl.fromTo(
        heheRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,

          duration: 1,

          ease: "power3.out",
        },

        timeline6Start,
      );
    }, 500);
  }, [started]);

  const startEdit = () => {
    if (started) return;
    setStarted(true);
  };

  return (
    <div className="app">
      <Timeline1
        imageRef={timeline1Ref}
        kasihRef={kasihRef}
        tauRef={tauRef}
        mamahRef={mamahRef}
      />

      <Timeline2
        image2Ref={image2Ref}
        image3Ref={image3Ref}
        image4Ref={image4Ref}
        image5Ref={image5Ref}
        ajakRef={ajakRef}
        kuRef={kuRef}
        bertemuRef={bertemuRef}
      />

      <Timeline3
        imageRef={timeline3ImageRef}
        kapanRef={kapanRef}
        dimanaRef={dimanaRef}
        danRef={danRef}
      />

      <Timeline4
        image7Ref={image7Ref}
        image8Ref={image8Ref}
        image9Ref={image9Ref}
        esokRef={esokRef}
        lusaRef={lusaRef}
        atauRef={atauRef}
        malamRef={malamRef}
      />

      <Transisi1 transisiRef={transisi1Ref} />

      <Timeline5
        image10Ref={image10Ref}
        image11Ref={image11Ref}
        image12Ref={image12Ref}
        image13Ref={image13Ref}
        image14Ref={image14Ref}
        malam1Ref={malam1Ref}
        minggu1Ref={minggu1Ref}
        malam2Ref={malam2Ref}
        minggu2Ref={minggu2Ref}
        jadiRef={jadiRef}
        kapan2Ref={kapan2Ref}
        ketemuRef={ketemuRef}
      />

      <Timeline6 imageRef={image15Ref} textRef={heheRef} />

      {!started && <PlayButton onStart={startEdit} />}
    </div>
  );
}

export default App;
