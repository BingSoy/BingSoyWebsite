class Div2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
 <div class="cnav3" id="myTopnav4">
  <a class="fixgame" href="fixgame">Fix Game</i></a>
  <a class="strategy" href="strategy">Subclass</i></a>
  <a class="thanks" href="thanks">Thanks</i></a>
  <a class="tribute" href="tribute">Tribute</i></a>
  <a class="timeline" href="timeline">Timeline</i></a>
  <a class="mods" href="mods">Mods</i></a>
  <a class="scoring" href="scoring">Scoring</i></a>
  <a class="faq" href="faq">FAQ</i></a>
  <a class="" href="https://gamebanana.com/members/2048161" target="_blank">GameBanana</i>&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="https://www.youtube.com/channel/UCXeVMuFXaP4juglhff4a3tQ" target="blank">Second Channel&nbsp;<i class="fas fa-external-link-alt"></i></a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 </div>
    `;
  }
}

customElements.define('h-scnd', Div2);