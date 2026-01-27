import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
	title: 'Organisms/SectionHeader',
	component: SectionHeader,
	tags: ['autodocs'],
	argTypes: {
		badgeVariant: {
			control: 'select',
			options: ['yellow', 'mint', 'sky', 'coral', 'dark', 'gray'],
		},
		centered: {
			control: 'boolean',
		},
		light: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
	args: {
		badge: 'Our services',
		title: 'Revenue operations consulting',
		subtitle:
			'We help B2B companies build scalable revenue engines through strategy, process, and technology.',
	},
};

export const WithoutBadge: Story = {
	args: {
		title: 'How we work',
		subtitle: 'A structured approach to revenue operations transformation.',
	},
};

export const WithoutSubtitle: Story = {
	args: {
		badge: 'Case studies',
		title: 'Client success stories',
	},
};

export const LeftAligned: Story = {
	args: {
		badge: 'About us',
		title: 'Meet the team',
		subtitle: 'Revenue operations experts with decades of combined experience.',
		centered: false,
	},
};

export const LightMode: Story = {
	args: {
		badge: 'Contact',
		badgeVariant: 'yellow',
		title: "Let's talk revenue",
		subtitle: 'Ready to transform your revenue operations?',
		light: true,
	},
	parameters: {
		backgrounds: { default: 'dark' },
	},
	decorators: [
		(Story) => (
			<div className={css({ bg: 'ocobo.dark', p: '8' })}>
				<Story />
			</div>
		),
	],
};

export const AllBadgeVariants: Story = {
	render: () => (
		<div className={css({ display: 'flex', flexDir: 'column', gap: '12' })}>
			<SectionHeader
				badge="Yellow"
				badgeVariant="yellow"
				title="Yellow badge variant"
			/>
			<SectionHeader
				badge="Mint"
				badgeVariant="mint"
				title="Mint badge variant"
			/>
			<SectionHeader badge="Sky" badgeVariant="sky" title="Sky badge variant" />
			<SectionHeader
				badge="Coral"
				badgeVariant="coral"
				title="Coral badge variant"
			/>
			<SectionHeader
				badge="Dark"
				badgeVariant="dark"
				title="Dark badge variant"
			/>
			<SectionHeader
				badge="Gray"
				badgeVariant="gray"
				title="Gray badge variant"
			/>
		</div>
	),
};
