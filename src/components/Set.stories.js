import React from 'react'

import Set from './Set'

export default {
  title: 'Set',
  component: Set,
}

const Template = args => <Set {...args}></Set>

export const SetDefault = Template.bind({})
SetDefault.args = {
  number: '1',
  weight: 200,
  reps: 30,
  interval: '00:20:00',
  compact: false,
}

export const Compact = Template.bind({})
Compact.args = {
  number: '1',
  weight: 200,
  reps: 30,
  interval: '00:20:00',
  compact: true,
}
