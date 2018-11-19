import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { StoresNames } from '../../store'
import SeasonsStore from '../../store/seasons-store'
import SeasonCard from './components/SeasonCard'
import styles from './SeasonsList.module.scss'

interface Props {
  seasons: SeasonsStore
}

@inject(StoresNames.Seasons)
@observer
export default class SeasonsList extends Component<Props> {
  render() {
    return (
      <div className={styles.Container}>
        {this.props.seasons.seasons.map(season => (
          <SeasonCard key={season} year={season} />
        ))}
      </div>
    )
  }
}
