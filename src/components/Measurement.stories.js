import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Measurement from './Measurement'

export default {
  title: 'Measurement',
  component: Measurement,
}

const Template = args => <Measurement {...args}></Measurement>

export const BaseMeasurement = Template.bind({})
BaseMeasurement.args = {
  value: '100 °C',
  icon: 'thermometer-half',
  title: 'Temperature',
}

export const SimpleMeasurement = Template.bind({})
SimpleMeasurement.args = {
  value: '100 lbs',
  title: '1RM',
}

export const WithLayoredIcons = Template.bind({})
WithLayoredIcons.args = {
  value: '100 lbs',
  title: '1RM',
  icon: (
    <span class='fa-layers fa-fw'>
      <FontAwesomeIcon icon='square' color='green' />
      <FontAwesomeIcon icon='check' inverse transform='shrink-6' />
    </span>
  ),
}

export const SessionLength = Template.bind({})
SessionLength.args = {
  value: '01:30:50',
  title: 'Session Length',
  icon: 'clock',
}

export const TotalVolume = Template.bind({})
TotalVolume.args = {
  value: '17045 lbs',
  title: 'Total Volume',
  icon: 'weight-hanging',
}

export const TotalVolume2 = Template.bind({})
TotalVolume2.args = {
  value: '17045 lbs',
  title: 'Total Volume',
  icon: (
    <span class='fa-layers fa-fw'>
      <FontAwesomeIcon icon='weight-hanging' />
      <span
        class='fa-layers-text fa-inverse'
        style={{ fontSize: '1rem', paddingTop: '.5rem' }}
      >
        lbs
      </span>
    </span>
  ),
}

export const ActualWorkoutTime = Template.bind({})
ActualWorkoutTime.args = {
  value: '00:39:00',
  title: 'Actual Workout',
  icon: (
    <span class='fa-layers fa-fw'>
      <FontAwesomeIcon
        icon={['far', 'clock']}
        transform='shrink-4 up-2 left-1'
      />
      <FontAwesomeIcon icon='dumbbell' transform='shrink-11 down-5 right-6' />
    </span>
  ),
}

export const WastedTime = Template.bind({})
WastedTime.args = {
  value: '00:39:00',
  title: 'Wasted Time',
  icon: (
    <span class='fa-layers fa-fw'>
      <FontAwesomeIcon
        icon={['far', 'clock']}
        transform='shrink-4 up-2 left-1'
      />
      <FontAwesomeIcon icon='trash-alt' transform='shrink-11 down-5 right-6' />
    </span>
  ),
}

export const RestTimer = Template.bind({})
RestTimer.args = {
  value: '00:17:41',
  title: 'Rest Timer',
  icon: 'stopwatch',
}

export const ExercisesDone = Template.bind({})
ExercisesDone.args = {
  value: '8',
  title: 'Exercises Done',
  icon: (
    <span class='fa-layers fa-fw'>
      <FontAwesomeIcon icon='dumbbell' />
      <span
        class='fa-layers-counter'
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        10
      </span>
    </span>
  ),
}
