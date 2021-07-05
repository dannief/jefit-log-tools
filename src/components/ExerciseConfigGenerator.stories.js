import React from 'react'

import ExerciseConfigGenerator from './ExerciseConfigGenerator'

export default {
  title: 'ExerciseConfigGenerator',
  component: ExerciseConfigGenerator,
}

const Template = args => (
  <ExerciseConfigGenerator {...args}></ExerciseConfigGenerator>
)

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
    volume: 2880,
  },
}
