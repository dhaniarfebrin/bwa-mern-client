import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/StepItem';

export default {
    title: 'Components/Molecules/StepItem',
    component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: 'step 1',
    desc: 'Deskripsi goes here',
    icon: '/icon/step1.svg',
};
