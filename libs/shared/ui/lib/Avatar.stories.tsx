import { Story, Meta } from '@storybook/react'
import { AvatarIcon, AvatarIconProps } from './Avatar'

export default {
  component: AvatarIcon,
  title: 'Avatar',
} as Meta

const Template: Story<AvatarIconProps> = (args) => <AvatarIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  url: '/',
  alt: 'example',
  src: new URL('./images/bakeneko2.png', import.meta.url).href,
}
