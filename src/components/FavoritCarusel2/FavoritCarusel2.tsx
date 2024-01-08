import { useState } from "react";


type Props = {
  slides2: {
    content: JSX.Element;
  }[];
};

const FavoriteCarusel2 = ({ slides2 }: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleArrowClick = (direction: "next" | "prev") => {
    if (direction === "next" && currentSlideIndex < slides2.length - 1) {
      setCurrentSlideIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "prev" && currentSlideIndex > 0) {
      setCurrentSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex ease-out duration-500 `}
        style={{
          transform: `translateX(-${currentSlideIndex * (100 / slides2.length)}%)`,
          width: `${slides2.length * 100}%`,
        }}
      >
        {slides2 && slides2.length > 0 ? (
          slides2.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full sm:w-auto sm:h-auto  fv-carousel-2"
            >
              {slide.content}
            </div>
          ))
        ) : (
          <p>No slides available</p>
        )}
      </div>
      <div className="absolute flex z-10 top-0 h-full w-full justify-between items-center">
        <button onClick={() => handleArrowClick("prev")}>
          <img src="/favoriteImage/CaretLeft.svg" alt="" />
        </button>
        <button onClick={() => handleArrowClick("next")} className="mr-10">
          <img src="/favoriteImage/CaretRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default FavoriteCarusel2;
