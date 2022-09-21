import React from 'react'
import { CssBaseline } from '@mui/material'
// import { Route, Switch } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import useStyles from './styles'
import { Actors, MovieInformation, Movies, Navbar, Profile } from './'

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Navbar  />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />}>
          </Route>
          <Route path="/actors/:id" element={<Actors />}>
          </Route>
          <Route path="/" element={<Movies />}>
          </Route>
          <Route path="/profile/:id" element={<Profile />}>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App