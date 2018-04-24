class ProgressBar extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this._complete = 0;
    this._corfundo = 'red';
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute('complete', val);
  }
  get corfundo() {
    return this._corfundo;
  }

  set corfundo(val) {
    this.setAttribute('corfundo', val);
  }

  static get observedAttributes() {
    return ['complete', 'corfundo'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    var currentBar = this.shadow.querySelector('.progress-bar-inner');

    switch (name) {
      case 'complete':
        this._complete = parseInt(newVal, 10) || 0;
        if (currentBar && currentBar.style) {
          currentBar.style.width = this.complete + '%';
          currentBar.innerHTML = this.complete + '%';
        }
        break;
      case 'corfundo':
        this._corfundo = newVal;
        if (currentBar && currentBar.style) {
          currentBar.style.background = newVal;
        }
        break;
    }
  }

  connectedCallback() {
    var template = `
        <style>
        .progress-bar{
            width: 50%;
          height: 30px;
          background-color: #EDF2F4;
          border-radius: 5px;
          color: #FFF;
        }
         .progress-bar-inner {
          height: 100%;
          width:0%;
          line-height: 30px;
          text-align: center;
          border-radius: 5px;
        }
         </style>
      <div class="progress-bar">
        <div class="progress-bar-inner">${this.complete}%</div>
      </div>`;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('progress-bar', ProgressBar);
