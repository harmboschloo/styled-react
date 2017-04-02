import baseApi, {elements} from './index';

const createFactory = type => {
  const factory = createElement.bind(null, type);
  factory.type = type;
  return factory;
};

const componentFactory = factoryOrType => classNames => {
  const type = factoryOrType.type || factoryOrType;
  return createFactory(baseApi.component(type)(classNames));
};

const api = {
  global: baseApi.global,
  local: baseApi.local,
  component: componentFactory
};

elements.forEach(element => {
  api[element] = componentFactory(element);
});

export default api;
