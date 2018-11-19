import React from 'react'
import { Link } from 'react-router-dom'

import Flag from '../../../../common/assets/images/finish-flag.png'
import styles from './SeasonCard.module.scss'

interface Props {
  year: number
}

const SeasonCard = (props: Props) => {
  return (
    <Link className={styles.Container} to={`/seasons/${props.year}`}>
      <img src={Flag} alt="image" />
      <h2>{props.year}</h2>
    </Link>
  )
}

export default SeasonCard
