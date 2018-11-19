import React from 'react'
import moment from 'moment'

import styles from './RaceDetails.module.scss'
import RaceResults from '../../../../api/seasons-api/models/RaceResults'

interface Props {
  race: RaceResults
  highlighted: boolean
}

const RaceDetails = (props: Props) => {
  const { race } = props
  const rowContStyles = props.highlighted
    ? [styles.Container, styles.HighlightedRow].join(' ')
    : styles.Container

  return (
    <div className={rowContStyles}>
      <div className={styles.DateColumn}>
        <span className={styles.DateText}>{race.round}</span>
        <span className={styles.NameText}>{moment(race.date).format('DD MMM YYYY')}</span>
      </div>
      <div className={styles.CircuitColumn}>
        <span>{race.raceName}</span>
        <span>{race.Circuit.circuitName}</span>
      </div>
      <div className={styles.NameColumn}>
        <span className={styles.NameText}>{race.Results[0].Driver.givenName}</span>
        <span className={styles.NameText}>{race.Results[0].Driver.familyName}</span>
      </div>
    </div>
  )
}

export default RaceDetails
