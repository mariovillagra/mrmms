import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import styles from './styles'

const TextInput = ({ classes, inData, onChange }) => (
  <TextField
    id={inData.id}
    label={inData.label}
    placeholder={inData.placeholder}
    className={classes.textField}
    value={inData.value}
    onChange={onChange}
    margin='normal'
  />
)

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  inData: PropTypes.object.isRequired,
  onChange: PropTypes.func
}

export default withStyles(styles)(TextInput)
