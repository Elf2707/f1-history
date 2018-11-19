import React from 'react'
import ReactDOM from 'react-dom'
import { Link, MemoryRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import TestRenderer from 'react-test-renderer'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SeasonsList from '../index'
import { Store } from '../../../store'
import SeasonsStore from '../../../store/seasons-store'
import SeasonCard from '../components/SeasonCard'

configure({ adapter: new Adapter() })

interface Props {
  seasonsStore: SeasonsStore
}

describe('SeasonsList Component Tests Suit', () => {
  let store: Store
  let SeasonsListView = (props: Props) => (
    <Provider {...props}>
      <MemoryRouter>
        <SeasonsList />
      </MemoryRouter>
    </Provider>
  )

  beforeEach(() => {
    store = new Store()
  })

  it('SeasonsList renders right', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SeasonsListView {...store} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('SeasonsList renders right and match snapshot', () => {
    const tree = TestRenderer.create(<SeasonsListView {...store} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('SeasonsList press on season button call navigation method', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<SeasonsListView {...store} />)
    const seasonCards = wrapper.find(SeasonCard)
    const links = wrapper.find(Link)
    expect(seasonCards).toHaveLength(11)
    expect(links).toHaveLength(11)
  })
})
