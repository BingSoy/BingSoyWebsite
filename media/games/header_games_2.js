class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
  <a class="faq" href="faq">FAQ</a>
  <a class="" href="https://gamebanana.com/members/2048161" target="_blank">
    <i>GameBanana</i>&nbsp;<i class="fas fa-external-link-alt"></i>
  </a>
<a href="https://bingsoyteamfortress.blogspot.com/" target="_blank">
    Blog&nbsp;
    <i class="fas fa-external-link-alt"></i>
  </a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);