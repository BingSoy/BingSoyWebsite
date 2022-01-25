class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="index.html">Home</a>
  <a class="about" href="about.html">About</a>
  <a class="socials" href="socials.html">Socials</a>
  <a class="projects" href="projects.html">Projects</a>
  <a class="donate" href="donate.html">Donate</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);