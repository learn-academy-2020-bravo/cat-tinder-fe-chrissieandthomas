import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'
import cats from '../../cats'

Enzyme.configure({ adapter: new Adapter() })

it('CatIndex renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CatIndex cats={ cats } />, div)
  })
  
  it('checking for three cat entries', () => {
    const component = mount(<CatIndex cats={ cats }  />)
    const headings = component.find('h4')
    expect(headings.length).toBe(3)
  })