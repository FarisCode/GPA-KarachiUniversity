import React from 'react'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import styles from './CourseAdder.module.scss';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
})

export default props => {
  return (
    <div className={styles.Course}>
      <MuiThemeProvider theme={theme}>
        <TextField
          label={"Course #" + props.courseNum}
          id="mui-theme-provider-standard-input"
        />
        <TextField
          id="standard-number"
          label="Credit Hours"
          type="number"
          InputProps={{ inputProps: { min: 2, max: 3 } }}
          helperText='Between 1-3'
          value={props.creditValue}
          onChange={props.onCreditChange}
          style={{ width: '90px' }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="standard-number"
          label="Marks Obtained"
          tabIndex={props.courseNum}
          type="number"
          helperText='Between 50-100'
          value={props.value}
          onChange={props.onMarksChange}
          InputProps={{ inputProps: { min: 0, max: 100 } }}
          style={{ width: '115px' }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
      </MuiThemeProvider>

    </div>
  )
}
