import React from 'react'

import ExerciseCompact from './ExerciseCompact'

export default {
  title: 'ExerciseCompact',
  component: ExerciseCompact,
}

const Template = args => <ExerciseCompact {...args}></ExerciseCompact>

export const ExerciseCompactDefault = Template.bind({})
ExerciseCompactDefault.args = {
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
  exerciseVolume: 1000,
}
