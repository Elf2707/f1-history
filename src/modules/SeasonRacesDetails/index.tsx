import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import styles from './SeasonRacesDetails.module.scss'
import { StoresNames } from '../../store'
import SeasonsStore from '../../store/seasons-store'
import { FlagSpinner } from '../../common/ui'
import Header from './components/Header'
import RaceDetails from './components/RaceDetails'
import RaceResults from '../../api/seasons-api/models/RaceResults'
import { RouteComponentProps } from 'react-router'

interface Params {
  id: string
}

interface Props extends RouteComponentProps<Params> {
  seasons: SeasonsStore
}

@inject(StoresNames.Seasons)
@observer
export default class SeasonRacesDetails extends Component<Props> {
  componentDidMount() {
    const { params } = this.props.match
    if (!params || !params.id || Number.isNaN(+params.id)) {
      this.props.history.replace('/')
    }

    this.props.seasons.getSeasonResultsForPlace(+params.id, 1)
    this.props.seasons.getDriversStandings(+params.id)
  }

  getHighlightedState(race: RaceResults): boolean {
    const { seasonWinner } = this.props.seasons
    if (!seasonWinner || !race || !race.Results[0]) return false

    return seasonWinner.Driver.driverId === race.Results[0].Driver.driverId
  }

  render() {
    const { seasons, match } = this.props
    const { seasonWinner, racesWithWinners } = seasons

    return (
      <div className={styles.Container}>
        {this.props.seasons.loading ? (
          <FlagSpinner />
        ) : (
          <>
            <Header season={+match.params.id} winner={seasonWinner} />
            <div className={styles.Content}>
              {racesWithWinners.map(race => (
                <RaceDetails
                  key={race.round}
                  race={race}
                  highlighted={this.getHighlightedState(race)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}
