class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
 <div class="cnav" id="myTopnav">
  <a href="/index" class="active">Home</a>
  <a href="/about">About</a>
  <a href="/socials">Socials</a>
  <a href="/projects">Projects</a>
  <a href="/donate">Donate</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()"></a>
 </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);