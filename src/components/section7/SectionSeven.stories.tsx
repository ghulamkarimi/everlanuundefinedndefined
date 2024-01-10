import { Meta, StoryObj } from "@storybook/react";
import SectionSeven from "./SectionSeven";

const meta = {
  title: "components/SectionSeven",
  component: SectionSeven,
} satisfies Meta<typeof SectionSeven>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
