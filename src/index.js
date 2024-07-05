import config from './config/config';
import Icon from './components/Icon';

const initSDK = (userConfig) => {
  Object.assign(config, userConfig);
  new Icon(config);
};

export default initSDK;
