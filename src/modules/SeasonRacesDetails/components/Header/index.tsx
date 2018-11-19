import React from 'react'

import DriverStandingData from '../../../../api/seasons-api/models/DriverStandingData'
import Winner from '../Winner'
import styles from './Header.module.scss'

interface Props {
  season: number
  winner: DriverStandingData | null
}

const Header = (props: Props) => {
  return (
    <div className={styles.Container}>
      <h1>
        Season: <span className={styles.SeasonIdText}>{props.season}</span>
      </h1>
      {props.winner && <Winner driver={props.winner} />}
    </div>
  )
}

export default Header
