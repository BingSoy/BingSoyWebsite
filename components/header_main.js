class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="https://bingsoy.com">Home</a>
  <a class="about" href="about">About</a>
  <a class="socials" href="socials">Socials</a>
  <a class="projects" href="projects">Projects</a>
  <a class="tribute" href="tribute">Tribute</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);