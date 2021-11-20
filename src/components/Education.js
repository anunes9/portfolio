import * as React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export const Education = () => (
  <Box sx={styles.container}>
    <Typography variant='h4' sx={styles.title}>Education</Typography>

    <Typography variant='h5' sx={styles.text}>Licentiate Degree in Information Technologies (IT)</Typography>

    <Box sx={styles.row}>
      <Typography sx={styles.text}>Faculdade de Ciências of Lisbon University</Typography>

      <Typography sx={styles.text}>2015 - 2018</Typography>
    </Box>
  </Box>
)

const styles = {
  container: {
    mb: 2,
    ml: {
      xs: 0,
      sm: 2
    },
    mr: {
      xs: 0,
      sm: 2
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2
  },
  title: {
    fontFamily: 'Roboto Condensed',
    // fontWeight: 'bold',
    mb: 1
  },
  text: {
    fontFamily: 'Roboto Condensed',
    // fontWeight: 'bold',
    mt: 1,
    pr: 1
  }
}