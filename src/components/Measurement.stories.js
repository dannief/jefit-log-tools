import React from 'react'

import Measurement from './Measurement'
import TotalVolume from './TotalVolume'
import TotalTime from './TotalTime'

export default {
  title: 'Measurement',
  component: Measurement,
};

export const BaseMeasurement = (args) => <Measurement {...args}></Measurement>
BaseMeasurement.args = {
  value: "100",
  unit: "°C",
  icon: "thermometer-half",
  title: "Temperature",
};

const TotalVolumneTemplate = (args) => <TotalVolume {...args} />;

export const TotalVolumneWithTitle = TotalVolumneTemplate.bind({});
TotalVolumneWithTitle.args = {
  showTitle: true,
  weight: "10270"
};

export const TotalVolumeWithoutTitle = TotalVolumneTemplate.bind({});
TotalVolumeWithoutTitle.args = {
  showTitle: false,
  weight: "10270"
};


const TotalTimeTemplate = (args) => <TotalTime {...args} />;

export const TotalTimeWithTitle = TotalTimeTemplate.bind({});
TotalTimeWithTitle.args = {
  showTitle: true,
  time: "65"
};

export const TotalTimeWithoutTitle = TotalTimeTemplate.bind({});
TotalTimeWithoutTitle.args = {
  showTitle: false,
  time: "120"
};
