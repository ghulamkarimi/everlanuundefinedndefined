 
import FavoriteCarusel2 from "./components/FavoritCarusel2/FavoritCarusel2";
import FavoritCarusel from "./components/FavoritCarusel/FavoritCarusel";
 
const App = () => {
  const slides = [
    {
      content:(
        <img
        className="grow shrink basis-0 h-96"
        src="/favoriteImage/image.png"
        alt=""
      />
      )
    }
 ,
    {
      content: (
        <img
      className="grow shrink basis-0  h-96"
      src="/favoriteImage/image3.png"
      alt=""
    />
      )
    },
   {
    content:(
      <img
      className="grow shrink basis-0 h-96"
      src="/favoriteImage/image5.png"
      alt=""
    />
    )
   },
  {
    content:(
      <img
      className="grow shrink basis-0 h-96"
      src="/favoriteImage/image4.png"
      alt=""
    />
    )
  },
   {
    content: (
      <img
      className="grow shrink basis-0 h-96"
      src="/favoriteImage/image6.png"
      alt=""
    />
    )
   },
 {
  content :(
    <img
    className="grow shrink basis-0 h-96"
    src="/favoriteImage/image7.png"
    alt=""
  />
  )
 },
  ]
  const slides2 = [
    {
      content: (
        <div className="container w-full flex gap-2 justify-center items-center">
          <div className="w-[50vw] h-64 px-16 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              People Are Talking
            </div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                "Love this shirt! Fits perfectly and the fabric is thick without{" "}
                <br />
                being stiff."
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                -- JonSnSF,{" "}
              </span>
              <span className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                The Heavyweight Overshirt
              </span>
            </div>
          </div>
          <div>
            <img
              src="/favoriteImage/image.png"
              alt=""
              className=" w-[50vw] h-96"
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className=" container  flex gap-2  justify-center items-center">
          <div className="w-[50vw]  h-64 px-16 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              People Are Talking
            </div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                "Love this shirt! Fits perfectly and the fabric is thick without{" "}
                <br />
                being stiff."
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                -- JonSnSF,{" "}
              </span>
              <span className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                The Heavyweight Overshirt
              </span>
            </div>
          </div>
          <div>
            <img
              src="/favoriteImage/image.png"
              alt=""
              className=" w-[50vw] h-96"
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="container flex gap-2 justify-center items-center">
          <div className="w-[50vw] h-64 px-16 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              People Are Talking
            </div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                "Love this shirt! Fits perfectly and the fabric is thick without{" "}
                <br />
                being stiff."
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                -- JonSnSF,{" "}
              </span>
              <span className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                The Heavyweight Overshirt
              </span>
            </div>
          </div>
          <div>
            <img
              src="/favoriteImage/image.png"
              alt=""
              className=" w-[50vw] h-96"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-[60%] m-auto pt-11 flex flex-col gap-8 ">
       <FavoritCarusel slides={slides} /> 
      <FavoriteCarusel2 slides2={slides2} />
    </div>
  );
};
export default App;