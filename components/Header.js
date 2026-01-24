class Header extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["title", "backButton"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[name] = newValue;
  }

  connectedCallback() {
    const shadowDOM = this.attachShadow({ mode: "open" });

    const component = document.querySelector("header-component");
    const isBackButton = component.hasAttribute("backButton");

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
        margin: 0 24px;
      }

      .header-title {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
      }

      .header-back {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
    <header>
      ${
        isBackButton
          ? `<a class="header-back" href="../index.html">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z"/></svg>
      </a>`
          : ""
      }
      <div class="header-logo"></div>
      <h1 class="header-title">${this.title}</h1>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
