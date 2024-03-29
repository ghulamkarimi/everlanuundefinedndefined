import { useState } from "react";

interface ISlide {
  id: string;
  title: string;

  image: string;
}

const FavoritCarusel = () => {
  const slide: ISlide[] = [
    {
      id: "1",
      title: "Toasted Coconut",
      image: "/favoriteImage/image3.png",
    },
    {
      id: "1",
      title: "Toasted Coconut",
      image: "/favoriteImage/image4.png",
    },
    {
      id: "1",
      title: "Toasted Coconut",
      image: "/favoriteImage/image5.png",
    },
    {
      id: "1",
      title: "Toasted Coconut",
      image: "/favoriteImage/image6.png",
    },
    {
      id: "1",
      title: "Toasted Coconut",
      image: "/favoriteImage/image7.png",
    },
  ];
  const [currentSlide] = useState(0);
  const [caruselSlideIndex, setCaruselSlideIndex] = useState(0);
  const slidesToShow = Math.min(
    window.innerWidth < 796 ? 2 : 2,
    window.innerWidth < 1024 ? 3 : 2,
    window.innerWidth < 596 ? 1 : 2
  );

  const handleCaruselNavigation = (direction: "forward" | "backward") => {
    switch (direction) {
      case "forward":
        if (caruselSlideIndex === slide.length - 1) {
          setCaruselSlideIndex(0);
        } else {
          setCaruselSlideIndex(caruselSlideIndex + 1);
        }
        break;
      case "backward":
        if (caruselSlideIndex === 0) {
          setCaruselSlideIndex(slide.length - 1);
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
          Beautifully Functional
        </div>
        <div className="self-stretch text-center text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </div>
      </div>

      <div className="overflow-hidden relative ">
        <div
          className={`flex gap-4 justify-center px-10 ease-out duration-40  `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slide && slide.length > 0 ? (
            slide

              .slice(caruselSlideIndex, caruselSlideIndex + slidesToShow)
              .map((s) => (
                <div className="min-w-60 " key={s.id}>
                  {s.image}
                  
                </div>
              ))
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
