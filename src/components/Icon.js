import { togglePanel } from './Panel';

class Icon {
  constructor(config) {
    this.config = config;
    this.createElement();
  }

  createElement() {
    const icon = document.createElement('div');
    icon.className = 'sdk-icon';
    icon.style.zIndex = 9999;
    this.setPosition(icon, this.config.position);
    icon.addEventListener('click', togglePanel);
    document.body.appendChild(icon);
  }

  setPosition(icon, position) {
    switch (position) {
      case 'bottom-right':
        icon.style.bottom = '10px';
        icon.style.right = '10px';
        icon.classList.add('bottom-right');
        break;
      case 'bottom-left':
        icon.style.bottom = '10px';
        icon.style.left = '10px';
        icon.classList.add('bottom-left');
        break;
      case 'top-right':
        icon.style.top = '10px';
        icon.style.right = '10px';
        icon.classList.add('top-right');
        break;
      case 'top-left':
        icon.style.top = '10px';
        icon.style.left = '10px';
        icon.classList.add('top-left');
        break;
      default:
        icon.style.top = '10px';
        icon.style.left = '10px';
        icon.classList.add('top-left');
    }
  }
}

export default Icon;
