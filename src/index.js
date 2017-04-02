import {createElement} from 'react';
import elements from './elements';
import {global, local, component} from './base';


const api = {
  global,
  local,
  component
};

elements.forEach(element => {
  api[element] = component(element);
});

export default api;
