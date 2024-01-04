import FavoritCarusel from "./components/FavoritCarusel";

const App = () => {
  let slides = [
    <img className="w-72 h-96" src="/public/favoriteImage/image.png" alt="" />,
    <img
      className="w-72   h-96"
      src="/public/favoriteImage/image3.png"
      alt=""
    />,
    <img
      className="w-72  h-96"
      src="/public/favoriteImage/image5.png"
      alt=""
    />,
    <img
      className="w-72  h-96"
      src="/public/favoriteImage/image4.png"
      alt=""
    />,
    <img className="w-72 h-96" src="/public/favoriteImage/image6.png" alt="" />,
    <img
      className=" w-72  h-96"
      src="/public/favoriteImage/image7.png"
      alt=""
    />,
  ];
  return (
    <div className="w-full">
      <FavoritCarusel slides={slides} />
    </div>
  );
};

export default App;
