import React from 'react'

import Set from './Set'

export default {
  title: 'Set',
  component: Set,
}

export const SetDefault = args => <Set {...args}></Set>
SetDefault.args = {
  number: '1',
  weight: 200,
  reps: 30,
  interval: '00:20:00',
}
