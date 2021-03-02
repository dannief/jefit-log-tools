import React from 'react'

import ExerciseOverload from './ExerciseOverload'

export default {
  title: 'ExerciseOverload',
  component: ExerciseOverload,
}

const Template = args => <ExerciseOverload {...args}></ExerciseOverload>

export const Default = Template.bind({})
Default.args = {
  exercise: {
    exerciseName: 'Wide Grip Lat Pulldown',
    oneRepMax: 112,
    sets: [
      {
        weight: 80,
        reps: 12,
      },
      {
        weight: 80,
        reps: 12,
      },
      {
        weight: 80,
        reps: 12,
      },
    ],
  },
  exerciseVolume: 2880,
}
