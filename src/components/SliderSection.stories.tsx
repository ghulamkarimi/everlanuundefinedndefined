import { Meta, StoryObj } from "@storybook/react";
import SliderSection from "./SliderSection";

const meta = {
  title: "componets/SliderSection",
  component: SliderSection,
} satisfies Meta<typeof SliderSection>;

export default meta;
type Story = StoryObj<typeof SliderSection>;
export const Default : Story= {}