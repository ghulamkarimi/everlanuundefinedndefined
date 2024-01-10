import { Meta, StoryObj } from "@storybook/react";
import FavoritCarusel from "./FavoritCarusel";

const meta = {
  title: "components/FavoritCarusel",
  component: FavoritCarusel,
} as Meta<typeof FavoritCarusel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides: [
      {
        content: (
          <img
            className="w-72 h-96"
            src="/FavoriteSection/image.png"
            alt="Default Image"
          />
        ),
      },
      {
        content: (
          <img
            className="w-72 h-96"
            src="/FavoriteSection/image1.png"
            alt="Default Image 2"
          />
        ),
      },
      {
        content: (
          <img
            className="w-72 h-96"
            src="/FavoriteSection/image2.png"
            alt="Default Image 2"
          />
        ),
      },
      {
        content: (
          <img
            className="w-72 h-96"
            src="/FavoriteSection/image3.png"
            alt="Default Image 2"
          />
        ),
      },
      {
        content: (
          <img
            className="w-72 h-96"
            src="/FavoriteSection/image4.png"
            alt="Default Image 2"
          />
        ),
      },
      {
        content: (
          <img
            className="w-72 h-96"
            src="/FavoriteSection/image5.png"
            alt="Default Image 2"
          />
        ),
      },
    ],
  },
};







 









