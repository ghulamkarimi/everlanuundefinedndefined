 
 
import FavoritCarusel from "./components/FavoritCarusel/FavoritCarusel";
import Carousel from "./components/Carousel";
import FavoriteCarusel2 from "./components/FavoritCarusel2/FavoritCarusel2";
 
 
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
  
  return (
    <div className="w-[60%] m-auto pt-11 flex flex-col gap-8 ">
       <FavoritCarusel slides={slides} />  
       <FavoriteCarusel2  />
      <Carousel />
      
    </div>
  );
};
export default App;