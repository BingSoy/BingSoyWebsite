class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="https://bingsoy.com/gaming/hitman/">Home</a>
  <a class="about" href="about">About</a>
  <a class="qol" href="qol">QoL</a>
  <a class="mods" href="mods">Mods</a>

  <a href="https://www.youtube.com/@BingSoyHITMAN" target="blank">YouTube&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>

  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);