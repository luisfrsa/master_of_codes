class MyModal extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this._oppened = false;
    this._title = '';
    this._body = '';
  }

  get oppened() {
    return this._oppened;
  }

  set oppened(val) {
    this.setAttribute('oppened', val);
  }
  get title() {
    return this._title;
  }

  set title(val) {
    this.setAttribute('title', val);
  }

  get body() {
    return this._body;
  }

  set body(val) {
    this.setAttribute('body', val);
  }

  static get observedAttributes() {
    return ['oppened', 'title', 'body'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    var currentModal = this.shadow.querySelector('.modal-bg');
    switch (name) {
      case 'oppened':
        if (currentModal && currentModal.style) {
          this._oppened = (newVal == '"true"' || "'true'")  ? true : false;
          currentModal.style.display = this._oppened ? 'block' : 'none';
        }
        break;
      case 'title':
        this._title = newVal;
        break;
      case 'body':
        this._body = newVal;
        break;
    }
  }

  connectedCallback() {
    let self = this;
    var template = `
        <style>
          .modal-bg{
            position:absolute;
            z-index:1;
            background:rgba(0,0,0,0.2);
            top:0px;
            left:0px;
            width:100%;
            height:100%;
            display:none;
          }
          .modal-bg .modal{
            position:relative;
            top:40%;
            width:80%;
            max-width:400px;
            margin:auto;   
            box-shadow:0 0 1px #000;
            box-shadow: 0 2px 4px 0 #545454;
            border-radius:4px;    
            background:#fff; 
          }
          .modal #close{
            float:right;
            font-size:15px;
            font-weight:normal;
            cursor:pointer;
          }
          .modal .title{
            font-size:35px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-align:center;
            padding:10px;
            
          }
          .modal .content{
            text-align:left;
            padding:10px;
            line-height:35px;
            font-size:18px;
          }
         </style>
      <div class="modal-bg">
        <div class="modal">
          <h1 class="title">${this.title} <a id="close" title="Fechar">x</a></h1>
          <div class="content">${this.body}</div>
        </div>
      </div>`;

    this.shadow.innerHTML = template;
    this.shadow.getElementById('close').onclick = function(){
      let currentModal = self.shadow.querySelector('.modal-bg');
      if (currentModal && currentModal.style) {
        self._oppened = "false";
        currentModal.style.display = 'none';
      }
    };
  }
}

window.customElements.define('my-modal', MyModal);
