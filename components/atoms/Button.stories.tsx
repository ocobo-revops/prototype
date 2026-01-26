import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'outline', 'white'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		showArrow: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Get started',
		variant: 'primary',
		size: 'md',
	},
};

export const Outline: Story = {
	args: {
		children: 'Learn more',
		variant: 'outline',
		size: 'md',
	},
};

export const White: Story = {
	args: {
		children: 'Contact us',
		variant: 'white',
		size: 'md',
	},
	parameters: {
		backgrounds: { default: 'dark' },
	},
};

export const Small: Story = {
	args: {
		children: 'Small button',
		variant: 'primary',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		children: 'Large button',
		variant: 'primary',
		size: 'lg',
	},
};

export const NoArrow: Story = {
	args: {
		children: 'No arrow',
		variant: 'primary',
		showArrow: false,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4 items-center">
				<Button variant="primary" size="sm">
					Small
				</Button>
				<Button variant="primary" size="md">
					Medium
				</Button>
				<Button variant="primary" size="lg">
					Large
				</Button>
			</div>
			<div className="flex gap-4 items-center">
				<Button variant="outline" size="sm">
					Small
				</Button>
				<Button variant="outline" size="md">
					Medium
				</Button>
				<Button variant="outline" size="lg">
					Large
				</Button>
			</div>
			<div className="flex gap-4 items-center p-4 bg-ocobo-dark rounded-lg">
				<Button variant="white" size="sm">
					Small
				</Button>
				<Button variant="white" size="md">
					Medium
				</Button>
				<Button variant="white" size="lg">
					Large
				</Button>
			</div>
		</div>
	),
};
