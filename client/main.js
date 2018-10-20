import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import { Routes } from '../imports/startup/client'

import './main.html'

Meteor.startup(() => {
  render(<Routes />, document.getElementById('App'))
})
