import {createElement} from 'react';

export const global = a => a;
export const local = a => a.className;

export const component = type => (classNames = {}) => props => {
  const className =
    `${local(classNames) || ''} ${props.className || ''}`.trim() || null;
  return createElement(type, {...props, className});
};
