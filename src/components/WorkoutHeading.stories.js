import React from 'react'

import WorkoutHeading from './WorkoutHeading'

export default {
  title: 'WorkoutHeading',
  component: WorkoutHeading,
};

export const WorkoutHeadingDefault = (args) => <WorkoutHeading {...args}></WorkoutHeading>
WorkoutHeadingDefault.args = {
  routine: 'Upper: Push',
  date: '2020-10-12'
};