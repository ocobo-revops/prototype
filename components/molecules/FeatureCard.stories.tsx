import type { Meta, StoryObj } from '@storybook/react';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const meta: Meta<typeof FeatureCard> = {
	title: 'Molecules/FeatureCard',
	component: FeatureCard,
	tags: ['autodocs'],
	argTypes: {
		colour: {
			control: 'select',
			options: ['yellow', 'mint', 'sky', 'coral', 'dark'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Yellow: Story = {
	args: {
		icon: <Target size={48} />,
		title: 'Strategy',
		description: 'Revenue operations consulting',
		colour: 'yellow',
	},
};

export const Mint: Story = {
	args: {
		icon: <TrendingUp size={48} />,
		title: 'Growth',
		description: 'Scalable systems',
		colour: 'mint',
	},
};

export const Sky: Story = {
	args: {
		icon: <Users size={48} />,
		title: 'Teams',
		description: 'Alignment & efficiency',
		colour: 'sky',
	},
};

export const Coral: Story = {
	args: {
		icon: <Zap size={48} />,
		title: 'Speed',
		description: 'Rapid implementation',
		colour: 'coral',
	},
};

export const WithLabel: Story = {
	args: {
		icon: <Target size={48} />,
		title: 'Strategy',
		description: 'Revenue operations consulting',
		colour: 'yellow',
		label: 'Featured',
	},
};

export const AllColours: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-6 max-w-3xl">
			<FeatureCard
				icon={<Target size={48} />}
				title="Yellow"
				description="Primary accent"
				colour="yellow"
			/>
			<FeatureCard
				icon={<TrendingUp size={48} />}
				title="Mint"
				description="Success state"
				colour="mint"
			/>
			<FeatureCard
				icon={<Users size={48} />}
				title="Sky"
				description="Information"
				colour="sky"
			/>
			<FeatureCard
				icon={<Zap size={48} />}
				title="Coral"
				description="Warning/action"
				colour="coral"
			/>
		</div>
	),
};
