import { useState, useEffect } from "react";

export interface INews {
  id: number;
  title: string;
}

const news: INews[] = [
  {
    id: 1,
    title: "The Heavyweight Overshirt",
  },
  {
    id: 2,
    title: "womens",
  },
  {
    id: 3,
    title: "mens",
  },
  {
    id: 4,
    title: "kids",
  },
];

const News = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentNewsIndex === news.length - 1) {
        setCurrentNewsIndex(0);
      } else {
        setCurrentNewsIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

   
    return () => clearInterval(intervalId);
  }, [currentNewsIndex]);

  return (
    <div>
      <h2 className="cascad">{news[currentNewsIndex].title}</h2>
   
    </div>
  );
};

export default News;
