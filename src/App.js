import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Home from './WebRoutes/Home'
import Character from './WebRoutes/Character'
import NotFoundPage from './WebRoutes/NotFoundPage'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: theme.palette.background.page,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
