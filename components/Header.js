class Header extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[name] = newValue;
  }

  connectedCallback() {
    const shadowDOM = this.attachShadow({ mode: "open" });

    shadowDOM.innerHTML = `
    <style>
      header {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .header-logo {
        background-image: url("https://brandlogos.net/wp-content/uploads/2022/09/cat-logo_brandlogos.net_tl5q3-512x512.png");
        background-size: contain;
        background-repeat: no-repeat;
        height: 60px;
        width: 60px;
        margin-right: 16px;
      }

      .header-title {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
      }
    </style>
    <header>
      <div class="header-logo"></div>
      <h1 class="header-title">${this.title}</h1>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
