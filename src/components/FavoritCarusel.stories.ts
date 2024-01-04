import { Meta, StoryObj } from "@storybook/react";
import FavoritCarusel from "./FavoritCarusel";

const meta = {
  title: "components/FavoritCarusel",
  component: FavoritCarusel,
} satisfies Meta<typeof FavoritCarusel>;

export default meta;
type Story = StoryObj<typeof FavoritCarusel>;
export const Default : Story= {}