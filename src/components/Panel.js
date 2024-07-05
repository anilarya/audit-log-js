import { fetchData } from '../utils/api';

class Panel {
  constructor(icon) {
    this.icon = icon;
    this.panel = document.createElement('div');
    this.panel.className = 'sdk-panel';
    this.panel.style.display = 'none';
    this.panel.style.position = 'absolute';
    document.body.appendChild(this.panel);
    this.setPosition();
  }

  setPosition() {
    const iconRect = this.icon.getBoundingClientRect();
    const offset = 10; // offset to ensure some space between the icon and the panel

    if (this.icon.classList.contains('bottom-right')) {
      this.panel.style.bottom = `${window.innerHeight - iconRect.bottom + offset}px`;
      this.panel.style.right = `${window.innerWidth - iconRect.right}px`;
    } else if (this.icon.classList.contains('bottom-left')) {
      this.panel.style.bottom = `${window.innerHeight - iconRect.bottom + offset}px`;
      this.panel.style.left = `${iconRect.left}px`;
    } else if (this.icon.classList.contains('top-right')) {
      this.panel.style.top = `${iconRect.bottom + offset}px`;
      this.panel.style.right = `${window.innerWidth - iconRect.right}px`;
    } else if (this.icon.classList.contains('top-left')) {
      this.panel.style.top = `${iconRect.bottom + offset}px`;
      this.panel.style.left = `${iconRect.left}px`;
    }
  }

  async show() {
    const data = await fetchData();
    this.panel.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    this.panel.style.display = 'block';
    this.setPosition(); // Recalculate position in case of content size changes
  }

  hide() {
    this.panel.style.display = 'none';
  }
}

let panelInstance;

export const togglePanel = async (event) => {
  if (!panelInstance) {
    panelInstance = new Panel(event.currentTarget);
  }
  if (panelInstance.panel.style.display === 'none') {
    await panelInstance.show();
  } else {
    panelInstance.hide();
  }
};

export default Panel;
