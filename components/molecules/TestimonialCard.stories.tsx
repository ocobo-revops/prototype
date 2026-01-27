import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { css } from 'styled-system/css';
import { TestimonialCard } from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
	title: 'Molecules/TestimonialCard',
	component: TestimonialCard,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<MemoryRouter>
				<div className={css({ bg: 'ocobo.dark', p: '8' })}>
					<Story />
				</div>
			</MemoryRouter>
		),
	],
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
	args: {
		quote:
			'Working with Ocobo transformed our revenue operations. They brought clarity to our processes and helped us scale efficiently.',
		authorName: 'Sarah Chen',
		authorRole: 'VP of Revenue Operations',
	},
};

export const WithCTA: Story = {
	args: {
		quote:
			'The team at Ocobo delivered exceptional results. Our sales pipeline visibility improved dramatically within weeks.',
		authorName: 'Marc Dupont',
		authorRole: 'Chief Revenue Officer',
		ctaText: 'Read full story',
		ctaLink: '/stories/example',
	},
};

export const CustomInitials: Story = {
	args: {
		quote:
			'Ocobo helped us align our sales, marketing, and customer success teams around shared metrics and goals.',
		authorName: 'Jean-Pierre Martin',
		authorRole: 'CEO',
		authorInitials: 'JPM',
	},
};

export const LongQuote: Story = {
	args: {
		quote:
			'Before working with Ocobo, our revenue operations were fragmented across multiple tools and teams. They helped us build a unified data architecture, implement proper attribution models, and create dashboards that actually drive decisions. The ROI has been incredible.',
		authorName: 'Alexandra Petit',
		authorRole: 'Head of Growth',
		ctaText: 'See case study',
		ctaLink: '/stories/alexandra',
	},
};
