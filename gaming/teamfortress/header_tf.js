class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="https://bingsoy.com/gaming/teamfortress/">Home</a>
  <a class="about" href="about">About</a>
  <a class="mods" href="mods">Mods</a>
  <a href="https://www.youtube.com/@BingSoyTeamFortress" target="blank">
    <i class="fab fa-youtube"></i>&nbspTF&nbspChannel&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a href="https://www.youtube.com/@BingSoyTeamFortressSecondary" target="blank">
    <i class="fab fa-youtube"></i>&nbsp#2&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a href="https://www.youtube.com/@BingSoyTeamFortressMelee" target="blank">
    <i class="fab fa-youtube"></i>&nbsp#3&nbsp;
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