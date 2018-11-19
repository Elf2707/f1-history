import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import styles from './Toolbar.module.scss'
import backArrow from '../../../../common/assets/images/back-arrow.png'
import { Routes } from '../../../../config/routes'

interface Props extends RouteComponentProps {}

const Toolbar = (props: Props) => {
  const isLandingPage = props.location.pathname === Routes.Landing

  return (
    <div className={styles.Container}>
      {!isLandingPage && <img src={backArrow} alt="<Back" onClick={props.history.goBack} />}
      <h3 className={styles.TitleText}>F1 History</h3>
    </div>
  )
}

export default withRouter(Toolbar)
