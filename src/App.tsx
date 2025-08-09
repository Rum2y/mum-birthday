import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const App = () => {
  const imageList = [
    { img: "/pic_1.JPG", title: "Memory 1" },
    { img: "/pic_2.jpeg", title: "Memory 2" },
    { img: "/pic_3.JPG", title: "Memory 3" },
    { img: "/pic_4.JPG", title: "Memory 4" },
  ];

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.1 },
    });
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 700);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 min-h-screen flex flex-col items-center text-center p-6">
        {/* 🎉 Hero Section */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg animate-bounce mt-6">
          🎂 Happy Birthday, Mumsie! 🎉
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white max-w-lg leading-relaxed">
          Thank you for all the love, kindness you’ve shown towards me. Today is
          all about YOU! ❤️
        </p>

        {/* 🖼 Photo Section */}
        <div className="relative w-full max-w-3xl h-[300px] sm:h-[400px] mt-12 flex items-center justify-center">
          {imageList.map((item, index) => {
            // Responsive rotation & offset
            const rotations = ["-6deg", "5deg", "-10deg", "10deg"];
            const leftOffsets = ["0%", "20%", "40%", "60%"];
            const topOffsets = ["30%", "10%", "20%", "30%"];

            return (
              <img
                key={item.img}
                src={item.img}
                alt={item.title}
                onClick={() => setLightboxImg(item.img)}
                className="absolute w-34 sm:w-48 md:w-60 object-cover rounded-xl shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105"
                style={{
                  left: leftOffsets[index],
                  top: topOffsets[index],
                  transform: `rotate(${rotations[index]})`,
                  zIndex: index,
                  transformOrigin: "center",
                }}
              />
            );
          })}
        </div>

        {/* 💌 Message Section */}
        <div className="bg-white text-gray-800 md:mt-5 p-6 rounded-2xl shadow-xl max-w-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            A Special Message
          </h2>
          <p>
            Dear Mumsie, You’re my rock, my inspiration, and my best friend.
            Thank you for all the memories, your love towards me, and the
            countless sacrifices you’ve made. I cherish every moment we share,
            and I look forward to making many more beautiful memories together.
            Happy birthday mummy, I love you so much! 💕
          </p>
        </div>

        {/* ✨ Closing */}
        <p className="mt-10 text-white text-sm opacity-80">
          Made with ❤️ by Iyinoluwa 😏
        </p>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default App;
