import React from 'react'

import Exercise from './Exercise'

export default {
  title: 'Exercise',
  component: Exercise,
}

const Template = args => <Exercise {...args}></Exercise>

export const ExerciseDefault = Template.bind({})
ExerciseDefault.args = {
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
    volume: 1000,
    notes: ['This is a note', 'This too'],
  },
}
