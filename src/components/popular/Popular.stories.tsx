import { Meta, StoryObj } from "@storybook/react";
 import Popular from "./Popular";

const meta = {
    title:"components/Popular",
    component:Popular
}satisfies Meta<typeof Popular>
export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
 
};