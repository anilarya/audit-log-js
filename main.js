import config from './src/config/config';
import Icon from './src/components/Icon';

export const initSDK = (userConfig) => {
  Object.assign(config, userConfig);
  new Icon(config);
};
