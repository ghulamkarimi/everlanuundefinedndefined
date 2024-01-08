import { useState } from "react";

type Props = {
  slides: {
    content: JSX.Element;
  }[];
};

const FavoritCarusel = ({ slides }: Props) => {
  const [currentSlide] = useState(0);
  const [caruselSlideIndex, setCaruselSlideIndex] = useState(0);

  const handleCaruselNavigation = (direction: "forward" | "backward") => {
    switch (direction) {
      case "forward":
        if (caruselSlideIndex === slides.length - 1) {
          setCaruselSlideIndex(0);
        } else {
          setCaruselSlideIndex(caruselSlideIndex + 1);
        }
        break;
      case "backward":
        if (caruselSlideIndex === 0) {
          setCaruselSlideIndex(slides.length - 1);
        } else {
          setCaruselSlideIndex(caruselSlideIndex - 1);
        }
        break;
    }
  };

  return (
    <div>
      <div className="self-stretch mb-16 h-16 px-10 flex-col justify-start items-center gap-3 flex">
        <div className="self-stretch text-center text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
          Everlane Favorites
        </div>
        <div className="self-stretch text-center text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </div>
      </div>

      <div className="overflow-hidden relative ">
        <div
          className={`flex gap-4 justify-center px-10 ease-out duration-40 `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides && slides.length > 0 ? (
            slides
              .slice(caruselSlideIndex, caruselSlideIndex + 3)
              .map((s, index) => <div key={index}>{s.content}</div>)
          ) : (
            <p>No slides available</p>
          )}
        </div>
        <div className="absolute flex z-10 top-0 h-full w-full justify-between items-center">
          <button
            onClick={() => handleCaruselNavigation("backward")}
            className="h-12 w-12 rounded-full text-black "
          >
            <img src="/favoriteImage/CaretLeft.svg" alt="CaretLeft" />
          </button>
          <button
            onClick={() => handleCaruselNavigation("forward")}
            className="h-12 w-12 rounded-full text-black "
          >
            <img src="/favoriteImage/CaretRight.svg" alt="CaretRight" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritCarusel;
