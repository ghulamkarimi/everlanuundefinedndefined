import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

const TopHeader = () => {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    console.log("Random Color:", randomColor);
    return randomColor;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div
      className="w-full h-7 px-7 py-1.5 justify-between items-center inline-flex"
      style={containerStyle}
    >
      <div className="grow shrink basis-0 h-4 justify-center items-center gap-1 flex">
        <div className="text-center text-white text-xs font-semibold font-maison-neue leading-none tracking-tight">
          Get early access on launches and offers.
        </div>
        <div className="text-center text-white text-xs font-normal font-maison-neue underline leading-none tracking-tight">
          Sign Up For Texts
        </div>
        <div className="w-3.5 h-3.5 relative" />
      </div>
      <div className="justify-start items-center gap-3 flex">
        <div className="w-5 h-3.5 relative">
          <div className="w-5 h-3.5 left-0 top-0 absolute"></div>
        </div>
        <select className="w-[100px]">
            <option className="" value="">
            <ReactCountryFlag
                countryCode="US"
                svg
            />
</option>
            
       
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
