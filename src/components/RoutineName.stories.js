import React from 'react'

import RoutineName from './RoutineName'

export default {
  title: 'RoutineName',
  component: RoutineName,
};

export const RoutineNameDefault = (args) => <RoutineName {...args}></RoutineName>
RoutineNameDefault.args = {
  name: 'Upper: Push'
};