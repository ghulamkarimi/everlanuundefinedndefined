import { Slide } from "./FavoritCarusel2";

const SlideItem = ({ title, quote, user, linkName, linkUrl, image}: Slide) => {
    return (
        <div
            className="w-full h-full sm:w-auto sm:h-auto"
        >
            <div className="container w-full flex flex-col lg:flex-row gap-20 lg:gap-2 justify-center items-center">
                <div className="self-stretch text-black text-2xl lg:text-base font-normal font-['Maison Neue'] leading-normal tracking-wide lg:px-16">
                    {title}
                </div>
                <div className="w-full lg:[50vw] lg:order-last">
                    <img
                        src={image}
                        alt=""
                        className=" w-full lg:[50vw] lg:h-[695px]"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col  gap-10 ">
                    
                    <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
                        <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                            {quote}
                        </div>
                    </div>
                    <div className="self-stretch">
                        <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                        -- {user},{" "}
                        </span>
                        <a href={linkUrl} className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                            {linkName}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideItem;











