import { useState } from "react";

type Props = {
  slides: React.ReactNode[];
};

const FavoritCarusel = ({ slides }: Props) => {
  let [current, setCurrent] = useState(0);
  const [caruselIndex, setCaruselIndex] = useState(3);
  const handleCaruselIndex = (operand: string) => {
    if (operand === "+") {
      if (caruselIndex === slides.length - 1) {
        setCaruselIndex(0);
      } else {
        setCaruselIndex(caruselIndex + 1);
      }
    } else if (operand === "-") {
      if (caruselIndex === 0) {
        setCaruselIndex(slides.length - 1);
      } else {
        setCaruselIndex(0);
      }
    }
  };

  //   const previousSlide = () => {
  //     if (current === 0) {
  //       setCurrent(slides.length - 1);
  //     } else {
  //       setCurrent(current - 1);
  //     }
  //   };

  //   const nextSlide = () => {
  //     if (current === slides.length - 1) {
  //       setCurrent(0);
  //     } else {
  //       setCurrent(current + 1);
  //     }
  //   };
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
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides && slides.length > 0 ? (
            slides
              .slice(caruselIndex, caruselIndex + 3)
              .map((s, index) => <div key={index}>{s}</div>)
          ) : (
            <p>No slides available</p>
          )}
        </div>
        <div className="absolute flex z-10 top-0 h-full w-full justify-between items-center">
          <button onClick={() => handleCaruselIndex("-")}>
            <img src="/public/favoriteImage/CaretLeft.svg" alt="" />
          </button>
          <button onClick={() => handleCaruselIndex("+")}>
            <img src="/public/favoriteImage/CaretRight.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritCarusel;
