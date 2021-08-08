import React from 'react'

import Notes from './Notes'

export default {
  title: 'Notes',
  component: Notes,
}

const Template = args => <Notes {...args}></Notes>

export const NotesDefault = Template.bind({})
NotesDefault.args = {
  notes: [
    'This is the first note',
    'This is the second note',
    'session 1',
    'Rest: 120s',
  ],
  open: true,
}
