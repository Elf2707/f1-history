import React from 'react'
import _ from 'lodash'

import styles from './FlagSpinner.module.scss'

const FlagSpinner = () => (
  <div className={styles.Container}>
    {_.range(0, 17).map(i => (
      <div key={i} className={styles.Block} />
    ))}
  </div>
)

export default FlagSpinner
