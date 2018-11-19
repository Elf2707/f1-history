import React from 'react'
import DriverStandingData from '../../../../api/seasons-api/models/DriverStandingData'

import styles from './Winner.module.scss'

interface Props {
  driver: DriverStandingData
}

const Winner = (props: Props) => {
  const { driver } = props

  return (
    <div className={styles.Container}>
      <span className={styles.DriverDataText}>
        {driver.Driver.givenName}{' '}
        <span className={styles.FamilyNameText}>{driver.Driver.familyName}</span>
      </span>
      <span className={styles.DriverDataText}>
        <span>points: </span>
        {driver.points}
      </span>
      <span className={styles.DriverDataText}>
        <span>wins: </span>
        {driver.wins}
      </span>
    </div>
  )
}

export default Winner
