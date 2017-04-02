import {createElement} from 'react';
import elements from './elements';
import {global, local, component} from './base';

const createFactory = type => {
  const factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
};

const componentFactory = type => classNames =>
  createFactory(component(type)(classNames));

const factory = ({type}) =>
  componentFactory(type)

const api = {
  global,
  local,
  factory,
  componentFactory
};

elements.forEach(element => {
  api[element] = componentFactory(element);
});

export default api;
