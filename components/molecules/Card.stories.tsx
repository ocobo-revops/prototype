import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { Card } from './Card';

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
			<div className={css({ p: '8' })}>
				<h3
					className={css({
						fontFamily: 'display',
						fontWeight: 'bold',
						fontSize: 'xl',
						color: 'ocobo.dark',
						mb: '2',
					})}
				>
					Card title
				</h3>
				<p className={css({ color: 'gray.600' })}>Card content goes here.</p>
			</div>
		),
	},
};

export const WithCustomClass: Story = {
	args: {
		children: (
			<div className={css({ p: '8' })}>
				<h3
					className={css({
						fontFamily: 'display',
						fontWeight: 'bold',
						fontSize: 'xl',
						color: 'ocobo.dark',
						mb: '2',
					})}
				>
					Custom styled
				</h3>
				<p className={css({ color: 'gray.600' })}>With shadow and padding.</p>
			</div>
		),
		className: css({ shadow: 'soft-lg', p: '4' }),
	},
};
