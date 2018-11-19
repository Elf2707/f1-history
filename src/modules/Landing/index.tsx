import React, { Component } from 'react'

import styles from './Landing.module.scss'
import Intro from './components/Intro'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className={styles.ContentPage}>
          <Intro />
        </div>
        <div className={styles.SecondPage}>
          <div className={styles.About}>
            <p>
              This application allows you to explore history of Formula One. You could dive deep to
              the greatest moments of F1 since the beginning of the world championships in 1950.
            </p>
            <p>
              You will know who was the fastest human on Earth each year and will sense the magic of
              speed.
            </p>
          </div>
        </div>
      </>
    )
  }
}
