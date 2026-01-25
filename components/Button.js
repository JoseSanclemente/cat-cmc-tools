class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["label", "type"];
  }

  attributeChangedCallback(_, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  get label() {
    return this.getAttribute("label") || "Sample Text";
  }

  get type() {
    return this.getAttribute("type") || "primary";
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      @import "../styles/global.css";
      :host {
        display: block;
        width: 100%;
      }
      button {
        width: 100%;
        ${this.type === "primary" ? "background: var(--primary-color);" : "background: var(--secondary-color);"};
        padding: 12px 20px;
        ${this.type === "primary" ? "color: var(--text-color);" : "color: var(--text-color-secondary);"};
        font-size: 18px;
        font-weight: bold;
        font-family: "Host Grotesk", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s;
      }
    
      button:hover {
        ${this.type === "primary" ? "background: var(--primary-hover);" : "background: var(--secondary-hover);"};
      }
    </style>
    <button>${this.label}</button>
    `;
  }
}

customElements.define("button-component", Button);
