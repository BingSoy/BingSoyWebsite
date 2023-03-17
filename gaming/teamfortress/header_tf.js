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
  <a href="https://www.youtube.com/@BingSoyTeamFortress" target="blank">YouTube&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  <a href="https://www.youtube.com/@BingSoyTeamFortressSecondary" target="blank">
    YT 2nd&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);