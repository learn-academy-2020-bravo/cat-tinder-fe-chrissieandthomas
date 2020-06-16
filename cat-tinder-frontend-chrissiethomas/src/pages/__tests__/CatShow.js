import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow'
import cats from '../../cats'

Enzyme.configure({ adapter: new Adapter() })

it('CatShow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CatShow cats={ cats } />, div)
  })
  
  it('checking for one specific cat by id', () => {
    // const wrapper = shallow(<div><button className='btn btn-primary'>OK</button></div>);
    // const button = wrapper.find('.btn'); 
    const component = mount(<CatShow cats={ cats }  />)
    const cat = component.find('h4')
    expect(cat.length).toBe(1)
    // expect(cat.text()).to.be.eql('Mr. Meowsalot')
  })