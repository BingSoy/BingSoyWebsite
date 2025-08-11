class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="https://bingsoy.com">Home</a>
  <a class="socials" href="socials">Socials</a>
  <a class="about" href="about">About</a>
  <a class="projects" href="projects">Projects</a>
  <a href="https://www.youtube.com/@BingSoyLIVE" target="blank">
    🔴LIVE&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a href="https://discord.gg/5E2xguXnwX" target="blank">
  <i class="fa-brands fa-discord"></i>
    Discord&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);