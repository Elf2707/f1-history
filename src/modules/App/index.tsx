import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import '../../common/styles/common.scss'
import styles from './App.module.scss'
import { Routes } from '../../config/routes'
import Landing from '../Landing'
import SeasonsList from '../SeasonsList'
import SeasonRacesDetails from '../SeasonRacesDetails'
import Toolbar from '../Navigation/components/Toolbar'

class App extends React.Component {
  render() {
    return (
      <main className={styles.MainContainer}>
        <Toolbar />
        <Switch>
          <Route path={`${Routes.SeasonsList}/:id`} component={SeasonRacesDetails} />
          <Route path={Routes.SeasonsList} component={SeasonsList} />
          <Route path={Routes.Landing} component={Landing} exact />
          <Redirect to="/" />
        </Switch>
      </main>
    )
  }
}

export default App
