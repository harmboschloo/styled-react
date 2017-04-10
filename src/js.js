import { createElement } from "react";
import elements from "./elements";
import { global, local, component } from "./base";

const createFactory = type => {
  const factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
};

const componentFactory = type =>
  classNames => createFactory(component(type)(classNames));

const styled = ({ type }) => componentFactory(type);

elements.forEach(element => {
  styled[element] = componentFactory(element);
});

styled.global = global;
styled.local = local;
styled.component = componentFactory;

export default styled;
