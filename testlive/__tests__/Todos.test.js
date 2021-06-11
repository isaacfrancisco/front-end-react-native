import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../src/Todos';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const initialState = {
  todos: [
    { id: 0, text: 'Fazer café' },
    { id: 1, text: 'Acessar o slack' },
    { id: 2, text: 'Ver RocketLive' },
  ],
};
 
const store = mockStore(initialState);

//Definindo testes
describe('Testing Todos Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow( 
      <Todos  /> ,
      { context: {store} }
    ).dive();

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(wrapper).toMatchSnapshot();
  });
});