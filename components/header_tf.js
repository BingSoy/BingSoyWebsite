class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav" id="myTopnav">
  <a class="index" href="index.html">Home</a>
  <a class="fixgame" href="fixgame.html">Fix Game</a>
  <a class="about" href="about.html">About</a>
  <a href="https://www.youtube.com/channel/UCj5vCC_PuSuM8TqQKT9jGTQ" target="blank">YouTube&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-main', Header);