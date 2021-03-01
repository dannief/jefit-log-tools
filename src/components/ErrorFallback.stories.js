import React from 'react'

import ErrorFallback from './ErrorFallback'

export default {
  title: 'ErrorFallback',
  component: ErrorFallback,
}

const Template = args => <ErrorFallback {...args}></ErrorFallback>

export const Default = Template.bind({})
