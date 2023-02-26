class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="https://bingsoy.com/teamfortress/">Home</a>
  <a class="about" href="about">About</a>
  <a href="https://www.deviantart.com/bingsoy" target="blank">Gallery (dA)&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  <a href="https://www.youtube.com/@BingSoyArt" target="blank">YouTube&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);