class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <p class="footerCopyright">&copy 2020-2024 Bing Soy</p><br />
    `;
  }
}

customElements.define('f-copy', Footer);