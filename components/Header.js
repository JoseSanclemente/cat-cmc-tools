class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["title", "back-button"];
  }

  attributeChangedCallback(_, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  get title() {
    return this.getAttribute("title") || "";
  }

  get showBackButton() {
    return this.hasAttribute("back-button");
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        width: 100%;
      }
      header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
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
        color: #000;
      }

      .header-back {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;
        position: absolute;
        left: 20px;
      }
    </style>
    <header>
      ${
        this.showBackButton
          ? `<a class="header-back" href="../index.html" aria-label="Go back">
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
