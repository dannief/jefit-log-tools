import React from 'react'

import ExerciseVolumeEditor from './ExerciseVolumeEditor'

export default {
  title: 'ExerciseVolumeEditor',
  component: ExerciseVolumeEditor,
}

const Template = args => <ExerciseVolumeEditor {...args}></ExerciseVolumeEditor>

export const Default = Template.bind({})
Default.args = {
  overloadOpt: {
    weight: 80,
    reps: 12,
    sets: 3,
  },
}
