import React from 'react'

import WorkoutDate from './WorkoutDate'

export default {
  title: 'WorkoutDate',
  component: WorkoutDate,
};

export const WorkoutDateDefault = (args) => <WorkoutDate {...args}></WorkoutDate>
WorkoutDateDefault.args = {
  date: '2020-10-12'
};