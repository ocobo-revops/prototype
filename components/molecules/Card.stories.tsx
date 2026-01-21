import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
	title: 'Molecules/Card',
	component: Card,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		children: (
			<div className="p-8">
				<h3 className="font-display font-bold text-xl text-ocobo-dark mb-2">
					Card title
				</h3>
				<p className="text-gray-600">Card content goes here.</p>
			</div>
		),
	},
};

export const WithCustomClass: Story = {
	args: {
		children: (
			<div className="p-8">
				<h3 className="font-display font-bold text-xl text-ocobo-dark mb-2">
					Custom styled
				</h3>
				<p className="text-gray-600">With shadow and padding.</p>
			</div>
		),
		className: 'shadow-soft-lg p-4',
	},
};
