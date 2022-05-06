import * as React from 'react'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { LeftColumn } from './components/LeftColumn'
import { RightColumn } from './components/RightColumn'

const App = () => (
  <Box sx={styles.container}>
    <Paper sx={styles.card}>
      <LeftColumn />

      <RightColumn />
    </Paper>

    <Typography sx={styles.text}>andre.nunes @ 2022</Typography>
  </Box>
)

export default App

const styles = {
  container: {
    p: {
      xs: 1,
      sm: 3
    }
  },
  card: {
    display: 'flex',
    flexDirection: {
      xs: 'column', // to print change this to 'row'
      sm: 'row'
    }
  },
  text: {
    fontFamily: 'Roboto Condensed',
    textAlign: 'right',
    m: 2
  }
}
