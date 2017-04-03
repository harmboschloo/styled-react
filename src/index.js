import {createElement} from 'react';
import elements from './elements';
import {global, local, component} from './base';

const styled = type => component(type);

elements.forEach(element => {
  styled[element] = component(element);
});

styled.global = global;
styled.local = local;

export default styled;
