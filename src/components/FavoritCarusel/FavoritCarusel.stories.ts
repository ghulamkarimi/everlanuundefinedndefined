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

    ]
  }
};
