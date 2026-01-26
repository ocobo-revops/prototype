import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
	title: 'Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		error: {
			control: 'boolean',
		},
		disabled: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: 'Enter your email',
		name: 'email',
	},
};

export const WithLabel: Story = {
	args: {
		label: 'Email address',
		placeholder: 'you@example.com',
		name: 'email',
		type: 'email',
	},
};

export const WithError: Story = {
	args: {
		label: 'Email address',
		placeholder: 'you@example.com',
		name: 'email',
		type: 'email',
		error: true,
		errorMessage: 'Please enter a valid email address',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Email address',
		placeholder: 'you@example.com',
		name: 'email',
		disabled: true,
	},
};

export const WithValue: Story = {
	args: {
		label: 'Full name',
		name: 'name',
		defaultValue: 'Jane Doe',
	},
};

export const AllStates: Story = {
	render: () => (
		<div className="flex flex-col gap-6 max-w-md">
			<Input label="Default" placeholder="Enter text..." name="default" />
			<Input label="With value" name="filled" defaultValue="Some text" />
			<Input
				label="Error state"
				name="error"
				error
				errorMessage="This field is required"
			/>
			<Input
				label="Disabled"
				name="disabled"
				placeholder="Cannot edit"
				disabled
			/>
		</div>
	),
};
