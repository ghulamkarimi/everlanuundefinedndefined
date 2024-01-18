 
 
import FavoritCarusel from "./components/FavoritCarusel/FavoritCarusel";
 
import FavoriteCarusel2 from "./components/FavoritCarusel2/FavoritCarusel2";
import Popular from "./components/popular/Popular";
import Search from "./components/search/Search";
import CarouselSlide from "./components/section8/CarouselSlide";
import TopHeader from "./components/topmenu/TopHeader";
 
 
const App = () => {
 
  
  return (
    <div>
      <TopHeader />
      <Search />
       <FavoritCarusel />  
       <FavoriteCarusel2  />
       <CarouselSlide />
       <Popular />
     
      
    </div>
  );
};
export default App;