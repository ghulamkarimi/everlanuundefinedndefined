import { useState } from "react";
import SlideItem from "./SlideItem";

export interface Slide {
  id: string;
  title: string;
  quote: string;
  user: string;
  linkName: string;
  linkUrl: string;
  image: string;
}
const FavoriteCarusel2 = () => {
  const slides: Slide[] = [
    {
      id: '1',
      title: 'People are talking',
      quote: "Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff.",
      user: "JonSnSF",
      linkName: "The Heavyweight Overshirt",
      linkUrl: "",
      image: "/favoriteImage/image.png"
    },
    {
      id: '2',
      title: 'People are talking',
      quote: "Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff.",
      user: "JonSnSF",
      linkName: "The Heavyweight Overshirt",
      linkUrl: "",
      image: "/favoriteImage/image.png"
    },
    {
      id: '3',
      title: 'People are talking',
      quote: "Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff.",
      user: "JonSnSF",
      linkName: "The Heavyweight Overshirt",
      linkUrl: "",
      image: "/favoriteImage/image.png"
    }
  ]
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleArrowClick = (direction: "next" | "prev") => {
    if (direction === "next" && currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "prev" && currentSlideIndex > 0) {
      setCurrentSlideIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className="relative overflow-hidden border border-sky-500 ">
      <div
        className={`flex ease-out duration-500 `}
        style={{
          transform: `translateX(-${currentSlideIndex * (100 / slides.length)}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides && slides.length > 0 ? (
          slides.map((slide) => (
            <SlideItem key={slide.id} {...slide} />
          ))
        ) : (
          <p>No slides available</p>
        )}
      </div>
      <div className="absolute flex z-100 top-0 h-full w-full justify-between items-center ">
        <button onClick={() => handleArrowClick("prev")}>
          <img src="/favoriteImage/CaretLeft.svg"  alt="" />
        </button>
        <button onClick={() => handleArrowClick("next")} className="mr-10 ">
          <img src="/favoriteImage/CaretRight.svg" alt=""  />
        </button>
      </div>
    </div>
  );
};
export default FavoriteCarusel2;