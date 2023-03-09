class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer><p> &copy 2020-2023 Bing Soy</p></footer>
    `;
  }
}

customElements.define('f-copy', Footer);