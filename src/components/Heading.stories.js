import React from 'react'

import Heading from './Heading'

export default {
  title: 'Heading',
  component: Heading,
}

export const HeadingDefault = args => <Heading {...args}></Heading>
HeadingDefault.args = {
  name: 'Upper: Push',
}
