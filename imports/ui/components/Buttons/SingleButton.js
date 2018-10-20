import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import styles from './styles'

const SingleButton = ({ classes, color, onClick, value }) => (
  <Button
    variant='contained'
    className={classes.button}
    color={color}
    onClick={onClick}
  >
    {value}
  </Button>

)

SingleButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string
}

export default withStyles(styles)(SingleButton)
