import React from 'react'

import DatePicker from './DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
}

const Template = args => <DatePicker {...args}></DatePicker>

export const Default = Template.bind({})
Default.args = {
  value: '2021-02-05',
}
