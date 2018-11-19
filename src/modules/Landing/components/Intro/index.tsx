import React from 'react'
import { withRouter } from 'react-router-dom'

import styles from './Intro.module.scss'
import { Button } from '../../../../common/ui'
import { History } from 'history'
import { Routes } from '../../../../config/routes'

interface Props {
  history: History
}

const Intro = (props: Props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <p className={styles.QuoteText}>
          “If a person has no dreams, they no longer have any reason to live. Dreaming is necessary,
          although in the dream reality should be glimpsed. For me this is a principle of life”.
        </p>
        <h3 className={styles.AuthorNameText}>Ayrton Senna</h3>
      </div>
      <div className={styles.Right}>
        <Button onClick={() => props.history.push({ pathname: Routes.SeasonsList })}>
          Deep To The F1 History
        </Button>
      </div>
    </div>
  )
}

export default withRouter(Intro)
