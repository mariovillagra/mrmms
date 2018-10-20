import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
})

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      pass: ''
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (name) {
    return (event) => {
      this.setState({
        [name]: event.target.value
      })
    }
  }

  handleLoginSubmit (event) {
    console.log(this.state.username + this.state.pass, 'Print state')
    event.preventDefault()
  }

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant='headline'>{'Ingresar'}</Typography>
            <form className={classes.form} onSubmit={this.handleLoginSubmit}>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='email'>Email Address</InputLabel>
                <Input
                  id='email'
                  name='email'
                  autoComplete='email'
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  autoFocus
                />
              </FormControl>
              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input
                  name='password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  value={this.state.pass}
                  onChange={this.handleChange('pass')}
                />
              </FormControl>
              <Button
                type='submit'
                fullWidth
                variant='raised'
                color='primary'
                className={classes.submit}
              >
                Sign in
              </Button>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                className={classes.submit}
              >
                Sign up
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Login)
