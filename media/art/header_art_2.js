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
  <a class="faq" href="LINK HERE">PLACEHOLDER</a>
  <a class="" href="LINK HERE" target="_blank">
    <i>PLACEHOLDER</i>&nbsp;<i class="fas fa-external-link-alt"></i>
  </a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);