import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
	title: 'Atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['yellow', 'mint', 'sky', 'coral', 'dark', 'gray'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md'],
		},
		rounded: {
			control: 'select',
			options: ['sm', 'full'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Yellow: Story = {
	args: {
		children: 'Revenue Ops',
		variant: 'yellow',
	},
};

export const Mint: Story = {
	args: {
		children: 'Strategy',
		variant: 'mint',
	},
};

export const Sky: Story = {
	args: {
		children: 'Technology',
		variant: 'sky',
	},
};

export const Coral: Story = {
	args: {
		children: 'Operations',
		variant: 'coral',
	},
};

export const Dark: Story = {
	args: {
		children: 'Featured',
		variant: 'dark',
	},
};

export const Gray: Story = {
	args: {
		children: 'Archived',
		variant: 'gray',
	},
};

export const SmallSize: Story = {
	args: {
		children: 'Small badge',
		variant: 'yellow',
		size: 'sm',
	},
};

export const MediumSize: Story = {
	args: {
		children: 'Medium badge',
		variant: 'yellow',
		size: 'md',
	},
};

export const RoundedFull: Story = {
	args: {
		children: 'Pill badge',
		variant: 'mint',
		rounded: 'full',
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex flex-wrap gap-2">
				<Badge variant="yellow">Yellow</Badge>
				<Badge variant="mint">Mint</Badge>
				<Badge variant="sky">Sky</Badge>
				<Badge variant="coral">Coral</Badge>
				<Badge variant="dark">Dark</Badge>
				<Badge variant="gray">Gray</Badge>
			</div>
			<div className="flex gap-2 items-center">
				<Badge variant="yellow" size="sm">
					Small
				</Badge>
				<Badge variant="yellow" size="md">
					Medium
				</Badge>
			</div>
			<div className="flex gap-2">
				<Badge variant="mint" rounded="sm">
					Rounded sm
				</Badge>
				<Badge variant="mint" rounded="full">
					Rounded full
				</Badge>
			</div>
		</div>
	),
};
