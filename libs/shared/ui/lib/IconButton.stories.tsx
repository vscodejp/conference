import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from './IconButton'

export default {
  component: IconButton,
  title: 'IconButton',
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  path: '/',
  tooltip: 'example',
  isTwitter: true,
  children: 'Click me!',
}
