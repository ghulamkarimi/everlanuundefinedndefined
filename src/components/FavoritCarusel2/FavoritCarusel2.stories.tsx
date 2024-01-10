import { Meta, StoryObj } from "@storybook/react";
import FavoriteCarusel2 from "./FavoritCarusel2";

const meta = {
  title: "components/FavoriteCarusel2",
  component: FavoriteCarusel2,
} as Meta<typeof FavoriteCarusel2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    slides2: [
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
    ]
  }
};





