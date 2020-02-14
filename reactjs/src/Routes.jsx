import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch, Redirect } from 'react-router-dom'

import Loading from './components/Loading/Loading'

const StartScreen = Loadable({
  loader: () => import('./scenes/StartScreen/StartScreen'),
  loading: Loading
})

const myPlants = Loadable({
  loader: () => import('./scenes/myPlants/myPlants'),
  loading: Loading
})

const AddPlant = Loadable({
  loader: () => import('./scenes/AddPlant/AddPlant'),
  loading: Loading
})


const saskiaStuff = Loadable({
  loader: () => import('./scenes/Stuff/Stuff'),
  loading: Loading
})

const nan = Loadable({
  loader: () => import('./scenes/404/404'),
  loading: Loading
})

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={StartScreen} />
      <Route path="/myPlants" component={myPlants} />
      <Route exact path="/addPlant" component={AddPlant} />
      <Route exact path="/stuff" component={saskiaStuff} />
      <Route path="/404" component={nan} />
      <Redirect to="/404" />
    </Switch>
  )
}
