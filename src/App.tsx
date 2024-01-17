 
 
import FavoritCarusel from "./components/FavoritCarusel/FavoritCarusel";
 
import FavoriteCarusel2 from "./components/FavoritCarusel2/FavoritCarusel2";
import Search from "./components/search/Search";
import CarouselSlide from "./components/section8/CarouselSlide";
import TopHeader from "./components/topmenu/TopHeader";
 
 
const App = () => {
 
  
  return (
    <div className="w-[60%] m-auto pt-11 flex flex-col gap-8 ">
      <TopHeader />
      <Search />
       <FavoritCarusel />  
       <FavoriteCarusel2  />
       <CarouselSlide />
     
      
    </div>
  );
};
export default App;